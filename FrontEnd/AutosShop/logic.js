url = 'http://127.0.0.1:5000/';

function getTableContent(event) {
  event.preventDefault();
  const tableName = document.querySelector('#Proveedor').textContent;
  console.log(tableName);

  const myAns = fetch(url).then(response => {
    //console.log(response.json());
    return response.text();
  }).then(data => {
    console.log(data);
    return data;
    //aqui implementar respuesta correcta
  })
}

function checkSubmit(event) {
  event.preventDefault();
  let user = document.querySelector('#user').value;
  let password = document.querySelector('#password').value;
  user = user.toUpperCase();
  password = password.toUpperCase();
  //console.log('user: ' + user + " " + 'pass: ' + password)
  
  if(user === 'CENTRAL' || user === 'UIO' || user === 'GYE'){
    if(user === 'CENTRAL'){
      window.location.href = './tableCENTRAL.html'
    } else {
      window.location.href = './tableNODO.html'
    }
  } else {
    alert('Bad credentials. Try again!');
  }

  document.querySelector('#user').value = '';
  document.querySelector('#password').value = '';
}
