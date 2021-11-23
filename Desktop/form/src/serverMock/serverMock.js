class ServerMock {
  constructor(login, password, responseTimeoutMs = 2000) {
    if (!login) {
      throw new Error('login required');
    }
    if (!password) {
      throw new Error('Password required');
    }
    this._login = login;
    this._password = password;
    this._responseTimeoutMs = responseTimeoutMs;
  }

  async login(loginData) {
    const { login, password } = loginData;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (login === this._login && password === this._password) {
          return resolve({
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
          });
        }
        reject({
          message: '401 UNAUTHORIZED',
          detailedMessage: 'Incorrect login or password.',
        });
      }, this._responseTimeoutMs);
    });
  }

  async passwordRecover(recoverData) {
    const { email } = recoverData;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          return reject({
            message: '400 BAD REQUEST',
            detailedMessage: 'Email required.',
          });
        }
        const newPassword = this._generateNewPassword();
        this._password = newPassword;
        console.log(`New password: ${newPassword}`);
        resolve();
      }, this._responseTimeoutMs);
    });
  }

  _generateNewPassword() {
    return Math.random().toString(36).slice(2);
  }
}

// примеры использования
const serverMock = new ServerMock('admin', 'qwerty');
serverMock
  .login({ login: 'test', password: 'test' })
  .then((response) => console.log('success', response))
  .catch((response) => console.log('failure', response));

serverMock
  .login({ login: 'admin', password: 'qwerty' })
  .then((response) => console.log('success', response))
  .catch((response) => console.log('failure', response));

serverMock
  .passwordRecover({ email: 'admin@test.com' })
  .then((response) => console.log('success recover', response))
  .catch((response) => console.log('failure recover', response));

serverMock
  .login({ login: 'admin', password: 'qwerty' })
  .then((response) => console.log('success', response))
  .catch((response) => console.log('failure', response));

export default new ServerMock('admin', 'pass');
