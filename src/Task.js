import React, { useState } from 'react'
import Delete from './Delete';
import UpdatePost from './UpdatePost';

function Task() {
 const [tasks, setTasks]= useState([]);

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
    //   console.log(searchData);
      setTasks(searchData.tasks);  
    } catch (error) {
      console.log(error);
    }
  };
  List();
  
  return (
    <div>
        <h1>Tasks</h1>
        {tasks.map(tasks=>(
            <div>
            {tasks.message}
            <button type='check' onClick={() => UpdatePost(tasks.id, tasks)}> </button>
            <button type='check' onClick={() => Delete(tasks.id)}> </button>

            </div>
        ))}
    </div>
  )
}

export default Task