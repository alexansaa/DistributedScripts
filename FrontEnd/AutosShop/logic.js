// Middleware endpoint
url = 'http://127.0.0.1:5000/';
tableEndpoint = 'table?tableName=';

// primary keys
const primaryKeys = {
  PROVEEDOR: "Ruc",
  PRODUCTO: "Id",
  AUTO: "Id_Auto",
  FACILITA: "Id",
  AUTO: "Id_Auto",
  CLIENTE: "Ruc_Cliente",
  PROFORMA: "Id_Proforma",
  FACTURA: "Id_Factura",
  AUTO: "Id_Auto",
  CLIENTE_AUTO: "Placa",
  DETALLE_PROFORMA: "Id",
  DETALLE_FACTURA: "Id",
}

// elements
const myTable = document.querySelector('#myTable');
const myId = document.querySelector('#myId');
const myValue = document.querySelector('#myValue');
const tableCnt = document.querySelector('#myTableContent');
const inputCnt = document.querySelector('#inputs');

// links
const ProveedorLink = document.querySelector('#Proveedor');
const ProductoLink = document.querySelector('#Producto');
const FacturaLink = document.querySelector('#Factura_Uio');
const AutosLink = document.querySelector('#Auto');

// on click event
ProveedorLink.addEventListener('click', getTableContent);
ProductoLink.addEventListener('click', getTableContent);
FacturaLink.addEventListener('click', getTableContent);
AutosLink.addEventListener('click', getTableContent);

// buttons on click event
const BtnAgregar = document.querySelector('#Agregar');
const BtnEliminar = document.querySelector('#Eliminar');
const BtnEditar = document.querySelector('#Editar');
const BtnAceptar = document.querySelector('#Aceptar');
const BtnCancelar = document.querySelector('#Cancelar');

// brn on click event
BtnAgregar.addEventListener('click', handleAgregar);
BtnEliminar.addEventListener('click', handleEliminar);
BtnEditar.addEventListener('click', handleEditar);
BtnAceptar.addEventListener('click', handleAceptar);
BtnCancelar.addEventListener('click', handleCancelar);




async function getTableContent(event) {
  let tableName = event.target.id
  console.log(tableName);

  tableName = tableName.toUpperCase();

  // Agregamos informacion de input de tabla
  createInputElmnts(tableName);

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

async function createInputElmnts(tableName) {
  myTable.textContent = tableName;
  myId.textContent = primaryKeys[tableName] + ': ';

  const myInputElmnt = document.createElement('iframe');
 switch(tableName) {
  case 'PROVEDOR':
    myInputElmnt.src = 'inputProveedor.html';
    break;
  case 'Producto':
    break;
  case 'Factura_Uio':
    break;
  case 'Auto':
    break;
 };

 inputCnt.appendChild(myInputElmnt);

}

function handleRow(rowId) {
  let myRow = document.querySelector('#' + rowId);
  const cells = myRow.getElementsByTagName('td');

  myValue.textContent = cells[0].textContent;

  // Aquí puedes acceder a los elementos de la fila y hacer lo que necesites con ellos
  
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
  } else if(type === 'POST' && payload ){
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

function handleEliminar() {
  tableName = 
  itemId
  console.log(tableName);
  console.log(itemId);
}

function handleAceptar() {
  console.log('aceptando');
}

function handleCancelar() {
  console.log('cancelar');
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
