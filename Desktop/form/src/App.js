import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Form from './authorization/form/form';

const App = () => {
  return (
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
};

export default App;
