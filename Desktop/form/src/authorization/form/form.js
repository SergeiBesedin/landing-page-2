import { Route, Routes } from 'react-router-dom';
import Login from '../login';
import Registration from '../registration';
import RestorePass from '../restore-pass';
import Navigation from './../../components/navigation/navigation';
import classes from './form.module.css';

const Form = () => {
  return (
    <div className={classes.form}>
      <Navigation />
      <form className={classes.body}>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/restorepass" element={<RestorePass />} />
        </Routes>
      </form>
    </div>
  );
};

export default Form;
