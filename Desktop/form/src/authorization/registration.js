import React from 'react';
import useInput from '../validation/validation';

const Registration = () => {
  const login = useInput('', {
    isEmpty: true,
    minLengthError: 4,
    maxLengthError: 15,
  });
  const password = useInput('', { isEmpty: true, minLengthError: 6 });
  const repeatPass = useInput('', { isEmpty: true, minLengthError: 6 });
  const email = useInput('', { isEmpty: true, emailError: true });

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
      <input
        type="email"
        name="email"
        value={email.value.trim()}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        placeholder="Email"
      />
      {email.isDirty && email.isEmpty && (
        <p style={{ color: 'red' }}>Поле не может быть пустым</p>
      )}
      {email.isDirty && email.emailError && (
        <p style={{ color: 'red' }}>Некорректный адрес</p>
      )}
      <input
        type="password"
        value={password.value}
        name="password"
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        placeholder="Введите пароль"
      />
      <input
        type="password"
        name="repeatPass"
        value={repeatPass.value.trim()}
        onChange={(e) => repeatPass.onChange(e)}
        onBlur={(e) => repeatPass.onBlur(e)}
        placeholder="Повторите пароль"
      />
      <button type="submit">Зарегистрироваться</button>
    </>
  );
};

export default Registration;
