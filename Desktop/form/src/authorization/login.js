import React from 'react';
import useInput from '../validation/validation';
import ServerMock from '../serverMock/serverMock';

const Login = () => {
  const login = useInput('', {
    isEmpty: true,
    minLengthError: 4,
    maxLengthError: 15,
  });
  const password = useInput('', { isEmpty: true, minLengthError: 6 });

  const handlerSubmit = (e) => {
    e.preventDefault();
    ServerMock.login({ login: 'test', password: 'test' });
  };

  return (
    <>
      <input
        type="login"
        value={login.value.trim()}
        onChange={(e) => login.onChange(e)}
        onBlur={(e) => login.onBlur(e)}
        name="login"
        placeholder="Введите логин"
      />
      {login.isDirty && login.isEmpty && (
        <p style={{ color: 'red' }}>Поле не может быть пустым</p>
      )}
      {login.isDirty && login.minLengthError && (
        <p style={{ color: 'red' }}>Некорректный логин</p>
      )}
      <input
        type="password"
        value={password.value.trim()}
        name="password"
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        placeholder="Введите пароль"
      />
      {password.isDirty && password.isEmpty && (
        <p style={{ color: 'red' }}>Поле не может быть пустым</p>
      )}
      {password.isDirty && password.minLengthError && (
        <p style={{ color: 'red' }}>Некорректный пароль</p>
      )}
      <button
        type="submit"
        onSubmit={(e) => handlerSubmit(e)}
        disabled={!login.inputValid || !password.inputValid}
      >
        Войти
      </button>
    </>
  );
};

export default Login;
