import React from 'react'

function UpdatePost(currentId, postData) {
    var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var formdata = new FormData();
formdata.append("message", "yes");
formdata.append("due_date", "OKA");
formdata.append("priority", "2");
formdata.append("assigned_to", "1");
formdata.append("taskid", currentId);

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