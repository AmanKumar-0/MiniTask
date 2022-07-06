import './App.css';
import ListUsers from './ListUsers';
import Nav from './Nav';
import Form from './Form';
import Task from './Task';
import { useState } from 'react';

function App() {
  

  return (
    <div className="app">
      <Nav/>
      <div className='app__form'>
      <ListUsers/>
      <Form />
      </div>
      <Task />
    </div>
  );
}

export default App;
