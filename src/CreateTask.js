import React from 'react'

function CreateTask(postData) {
  var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var formdata = new FormData();
formdata.append("message", (postData.message));
// formdata.append("created_on",postData.dueDate);
formdata.append("due_date", postData.dueDate);
formdata.append("priority", postData.priority);
formdata.append("assigned_to", postData.assignedTo);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://devza.com/tests/tasks/create", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return (
    <div>CreateTask</div>
  )
}

export default CreateTask