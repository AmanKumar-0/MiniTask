import React,{ useEffect, useState} from 'react'


const URL = `https://devza.com/tests/tasks/listusers`;


function ListUsers() {

    const [users, setUsers] = useState([]);
  
      
    useEffect(() => {
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
          List();
      }, [])

  return (
    <div className='listUser'>
    {users.map(users =>(
        <div>
          
         <h1 > {users.id} {users.name}  </h1>
        </div>    
))}
</div>
  )
}

export default ListUsers;