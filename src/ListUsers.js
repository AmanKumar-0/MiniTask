import React,{ useEffect, useState} from 'react';
import './ListUser.css';


const URL = `https://devza.com/tests/tasks/listusers`;


function ListUsers() {

    const [users, setUsers] = useState([]);
  
      
    var myHeaders = new Headers();
    myHeaders.append("AuthToken","UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    const List = async () => {
        try {
    
          const searchRes = await fetch(URL, requestOptions);
          const searchData = await searchRes.json();
          console.log(searchData.users);
          setUsers(searchData.users)  
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
          List();
      }, [])

  return (
    <div className='listUser'>
      <div className='listUser__heading'>
        List of Users
      <h7>available for assigning tasks</h7>
      </div>
    {users.map(users =>(
        <div className='listUser__names'>
          
         <h1>{users.id}:{users.name}</h1>
        </div>    
))}
</div>
  )
}

export default ListUsers;