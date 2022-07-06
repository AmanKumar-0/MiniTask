import React from 'react'

function Delete(currentId) {
    var myHeaders = new Headers();
    myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");
    
    var formdata = new FormData();
    formdata.append("taskid", currentId);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://devza.com/tests/tasks/delete", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  return (
    <div>
        Delete</div>
  )
}

export default Delete