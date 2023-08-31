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
  createTable(tableName, myData);
}

function createTable(tableName, data) {
  const tbl = document.createElement('table');
  const tbdy = document.createElement('tbody');

  let rowCount = 0;
  data.forEach(element => {
    rowCount += 1;
    const tr = document.createElement('tr');
    tr.id = `row${rowCount}`; // Establecemos el ID antes de agregar el evento 'click'

    // Agregamos el evento 'click' directamente en la creación de la fila
    tr.addEventListener('click', function() {
      handleRow(tr.id); // Llamamos a handleRow con el ID de la fila
    });


    for (const key in element) {
      const td = document.createElement('td');
      td.appendChild(document.createTextNode(element[key]));
      tr.appendChild(td);
    }

    tbdy.appendChild(tr);
  });

  tbl.appendChild(tbdy);
  tableCnt.appendChild(tbl);
}

function handleRow(rowId) {
  let myRow = document.querySelector('#' + rowId);
  // Aquí puedes acceder a los elementos de la fila y hacer lo que necesites con ellos
  const cells = myRow.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i++) {
    const cellValue = cells[i].textContent;
    // Haz algo con cellValue
    console.log('Valor de la celda:', cellValue); // Imprime el valor de la celda
  }
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
