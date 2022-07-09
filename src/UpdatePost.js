import React from 'react'

function UpdatePost(taskId, postData) {
    var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var formdata = new FormData();
formdata.append("message", postData.message);
formdata.append("due_date", postData.dueDate + " 12:12:12 ");
formdata.append("priority", postData.priority);
formdata.append("assigned_to", postData.assignedTo);
formdata.append("taskid", taskId);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://devza.com/tests/tasks/update", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <div>UpdatePost</div>
  )
}

export default UpdatePost