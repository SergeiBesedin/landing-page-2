import React from 'react';
import useInput from '../validation/validation';

const RestorePass = () => {
  const email = useInput('', { isEmpty: true, emailError: true });

  return (
    <>
      <p>
        Для восстановления пароля укажите адрес электронной почты, на который
        была зарегистрирована учетная запись
      </p>
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
      <button type="submit">Получить проверочный код</button>
    </>
  );
};

export default RestorePass;
