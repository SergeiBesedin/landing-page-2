import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.css';

const links = [
  { label: 'Войти', to: '/' },
  { label: 'Регистрация', to: '/registration' },
  { label: 'Восстановление пароля', to: '/restorepass' },
];

const Navigation = () => {
  return (
    <ul className={classes.nav}>
      {links.map((link, i) => (
        <li key={i}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
