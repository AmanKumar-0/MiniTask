import './App.css';
import ListUsers from './ListUsers';
import Nav from './Nav';
import Form from './Form';
import Task from './Task';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  
  const [postData, setPostData] = useState({message:'', dueDate:'', priority:'', assignedTo:''});
  const [taskId, setTaskId]= useState(null);

  return (
      <>
      <Nav/>
    <div className="app">
      <AppContext.Provider
        value={{postData, setPostData,taskId, setTaskId}}>      
      <div className='app__form'>
      <ListUsers/>
      <Form />
      </div>    
      <div><Task /></div>
      </AppContext.Provider>
    </div>
    </>
  );
}

export default App;
