import React, { useState } from 'react'
import './Form.css';
import CreateTask from './CreateTask';
import UpdatePost from './UpdatePost';


function Form() {
    const [postData, setPostData] = useState({message:'', dueDate:'', priority:'', assignedTo:''});

    const handleSubmit= (e) =>{
        e.preventDefault();
       
      (CreateTask (postData))
        
        clear();
};
const clear=()=>{
    
    setPostData({message:'', dueDate:'', priority:'', assignedTo:''});
  }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
        <div>
        <label for="message">Message</label>
          <input 
                type="text" id="message" name="message" placeholder='Message'
                value={postData.message} 
                onChange={(e)=> setPostData({...postData, message: e.target.value})}>
            </input>
              
            <label for="dueDate">Due Date</label>
          <input 
                type="date" id="dueDate" name="dueDate" placeholder='Due_Date'
                value={postData.dueDate} 
                onChange={(e)=> setPostData({...postData, dueDate: e.target.value})}>
            </input>
        
            <label for="priority">Priorty</label>
          <input 
                type="text" id="priority" name="priority" placeholder='Priority'
                value={postData.priority} 
                onChange={(e)=> setPostData({...postData, priority: e.target.value})}>
            </input>
         
            <label for="assignedTo">Assigned To</label>
          <input 
                type="text" id="assignedTo" name="assignedTo" placeholder='Assigned To'
                value={postData.assignedTo} 
                onChange={(e)=> setPostData({...postData, assignedTo: e.target.value})}>
            </input>
            <button type='submit' >submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form