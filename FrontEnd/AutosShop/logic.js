// Middleware endpoint
url = 'http://127.0.0.1:5000/';
tableEndpoint = 'table?tableName=';

// elements
const tableCnt = document.querySelector('#myTableContent');

// links
const ProveedorLink = document.querySelector('#Proveedor');
const ProductoLink = document.querySelector('#Producto');
const FacturaLink = document.querySelector('#Factura');
const AutosLink = document.querySelector('#Autos');

// on click event
ProveedorLink.addEventListener('click', getTableContent);
ProductoLink.addEventListener('click', getTableContent);
FacturaLink.addEventListener('click', getTableContent);
AutosLink.addEventListener('click', getTableContent);

async function getTableContent(event) {
  let tableName = event.target.id
  tableName = tableName.toUpperCase();
  const requestURL = url + tableEndpoint + tableName;
  const myTableData = await DoRequest('GET', requestURL);
  //console.log(myTableData);
  
  tableCnt.innerHTML = myTableData;
}

async function DoRequest(type, url, payload) {
  if(!url){
    return 'error';
  }

  if(type === 'GET') {
    const myAns = await DoGet(url);
    //console.log(myAns);
    return myAns;
  } else if(type == 'POST' && payload ){
    return DoPost(url, payload);
  } else {
    return 'error';
  }
}

async function DoGet(url){
  try {
    const fetchAns = await fetch(url);
    const myData = await fetchAns.text();
    //console.log(myData);
    return myData;
  } catch (error) {
    console.log('Get fetch error: ' + error);
  }
}

async function DoPost(url, payload){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('Post fetch error: ' + error);
    });
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
