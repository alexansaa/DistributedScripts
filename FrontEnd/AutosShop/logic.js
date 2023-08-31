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
  let myTableData = await DoRequest('GET', requestURL);
  myTableData =  myTableData.replace(/'/g, '"');
  const myJsonData = JSON.parse(myTableData);
  let myData = [];
  myJsonData.forEach(element => {
    const tmpData = JSON.parse(element);
    myData.push(tmpData);
  });
  // Consturimos tabla
  var tbl = document.createElement('table');
  var tbdy = document.createElement('tbody');

  let rowCount = 0;
  switch(tableName){
    case 'PROVEEDOR':
      myData.forEach(element => {
        rowCount += 1;
        var tr = document.createElement('tr');
        tr.addEventListener('click', handleRow);
        tr.id = ('row' + rowCount.toString());
        for (var key in element){
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(element[key]));
          tr.appendChild(td);
        }
        tbdy.appendChild(tr);
      });
      break;
    case '':
  }
  tbl.appendChild(tbdy);
  //console.log(myTableData);
  
  //tableCnt.innerHTML = myTableData;
  tableCnt.appendChild(tbl);
}

function handleRow(e) {
  let myId = e.currentTarget.id;
  myId = myId.toString();
  const myRow = document.querySelector('#' + myId);
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
