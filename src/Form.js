import React, { useContext, useEffect} from 'react'
import './Form.css';
import CreateTask from './CreateTask';
import UpdatePost from './UpdatePost';
import { AppContext } from './App';

function Form() {
  const {postData, setPostData, taskId} = useContext(AppContext);

    
    const handleSubmit= (e) =>{
        e.preventDefault();
        if(taskId)
        UpdatePost(taskId, postData)
        else{
        CreateTask(postData)
          }  
      setTimeout(()=>clear(),1000);
};
let count=0;

const clear=()=>{
    
    setPostData({message:'', dueDate:'', priority:'', assignedTo:''});
  }

  const updateValue = (e)=>{
    setPostData(()=>({
      ...postData,
      [e.target.name]: e.target.value
    })
  )}
  
  return (
    <div className='form' sm-8>
        <form onSubmit={handleSubmit}>
        <div>
        <div className='form__heading'>Create Task</div> 
        <label for="message">Message</label>
          <input 
                type="text" id="message" name="message" 
                placeholder='Message'
                 value={postData.message}
                // onChange={(e)=> setPostData({...postData, message: e.target.value})
                onChange={(e)=> updateValue(e)}>
            </input>
              
            <label for="dueDate">Due Date</label>
          <input 
                type="date" id="dueDate" name="dueDate" placeholder='Due Date'
                value={postData.dueDate} 
                // onChange={(e)=> setPostData({...postData, dueDate: e.target.value})}>
                onChange={(e)=> updateValue(e) }>
          </input>
          
        
            <label for="priority">Priorty</label>
          <input 
                type="text" id="priority" name="priority" placeholder='Priority'
                value={postData.priority} 
                onChange={(e)=> updateValue(e) }>
            </input>
         
            <label for="assignedTo">Assigned To</label>
          <input 
                type="text" id="assignedTo" name="assignedTo" placeholder='Assigned To'
                value={postData.assignedTo} 
                onChange={(e)=> updateValue(e)}>
            </input>
            <button type='submit'> {taskId ? 'Update Post' : 'Make a Post'}</button>
            <button onClick={clear}>Clear</button>
            </div>
        </form>
    </div>
  )
}

export default Form