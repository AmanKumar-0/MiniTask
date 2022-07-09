import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './App';
import Delete from './Delete';
import './Task.css';



function Task() {
 
  const [tasks, setTasks]= useState([]);
  const {postData, setPostData, setTaskId} = useContext(AppContext);


 var myHeaders = new Headers();
 myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");
 
 var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
 };
 
 
 
 const List = async () => {
     try {
 
       const searchRes = await fetch("https://devza.com/tests/tasks/list", requestOptions);
       const searchData = await searchRes.json();
       searchData.tasks.sort((a,b)=> a.due_date>b.due_date ? 1:-1 && a.priority<b.priority ? 1:-1);
       setTasks(searchData.tasks);  
     } catch (error) {
       console.log(error);
     }
   };
     
 useEffect(() => {
  List();
 }, [postData, Delete]) 


  const dragOverItem = useRef();
  const dragItem = useRef();
  const dragStart =(e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyListItems = [...tasks];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasks(copyListItems);
    
  };
  
  
  function search_text() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('text');
      
    for (let i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



  return (
    
    <div className='task'>
        <div className='task__name'><h1>Tasks</h1></div>
        <input className='search' id="searchbar" onKeyUp={(e) => search_text()} type="text"
        name="search" placeholder="Search by Task Name.." ></input>
        <div className='task__text'>
        {tasks.map((tasks,index)=>(
            <div className='text' key={tasks.id} onDragStart={(e)=>dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} onDragOver={(e) => e.preventDefault()}  draggable>
            
            <h5>Task : {tasks.message}</h5> 
            <h5>Task Assigned To: {tasks.assigned_name}</h5> 
            {tasks.due_date}

            <div>{tasks.priority}</div>
            <button type='check' onClick={() => {Delete(tasks.id); List()}}>Delete </button> 
            <button type='check' onClick={() => setTaskId(tasks.id) & setPostData({...postData, message: tasks.message, priority: tasks.priority, assignedTo: tasks.assigned_to, dueDate: tasks.due_date}) 
              
              }>Edit </button>            
            </div>
        ))}
</div>       
    </div>
    
  )
}

export default Task;