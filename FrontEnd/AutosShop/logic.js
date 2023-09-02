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
const FacturaLink = document.querySelector('#Factura');
const AutosLink = document.querySelector('#Auto');
const AuditoriaLink = document.querySelector('#Auditoria');

// on click event
ProveedorLink.addEventListener('click', getTableContent);
ProductoLink.addEventListener('click', getTableContent);
FacturaLink.addEventListener('click', getTableContent);
AutosLink.addEventListener('click', getTableContent);
AuditoriaLink.addEventListener('click', getTableContent);

// buttons on click event
const BtnAgregar = document.querySelector('#Agregar');
const BtnEliminar = document.querySelector('#Eliminar');
const BtnEditar = document.querySelector('#Editar');
const BtnAceptar = document.querySelector('#Aceptar');
const BtnCancelar = document.querySelector('#Cancelar');

// btn on click event
//BtnAgregar.addEventListener('click', handleAgregar);
BtnEliminar.addEventListener('click', handleEliminar);
//BtnEditar.addEventListener('click', handleEditar);
BtnAceptar.addEventListener('click', handleAceptar);
BtnCancelar.addEventListener('click', handleCancelar);

// input elements
const ProveedorInput = document.querySelector('#proveedorInput');
const AutoInput = document.querySelector('#autoInput');
const ClienteInput = document.querySelector('#clienteInput');
const FacturaInput = document.querySelector('#facturaInput');
const ProductoInput = document.querySelector('#productoInput');
const ProformaInput = document.querySelector('#proformaInput');

ProveedorInput.style.display = 'none';
AutoInput.style.display = 'none';
ClienteInput.style.display = 'none';
FacturaInput.style.display = 'none';
ProductoInput.style.display = 'none';
ProformaInput.style.display = 'none';

async function getTableContent(event) {
  let tableName = event.target.id
  console.log(tableName);
  tableName = tableName.toUpperCase();

  // Agregamos informacion de input de tabla
  createInputElmnts(tableName);
  
  const requestURL = url + tableEndpoint + tableName;
  let myTableData = await DoRequest('GET', requestURL);
  console.log(myTableData)
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
  tableCnt.innerHTML = '';
  tableCnt.appendChild(tbl);
}

async function createInputElmnts(tableName) {
  myTable.textContent = tableName;
  myId.textContent = primaryKeys[tableName] + ': ';

 switch(tableName) {
  case 'PROVEEDOR':
    ProveedorInput.style.display = 'block';
    AutoInput.style.display = 'none';
    ClienteInput.style.display = 'none';
    FacturaInput.style.display = 'none';
    ProductoInput.style.display = 'none';
    ProformaInput.style.display = 'none';
    break;
  case 'PRODUCTO':
    ProveedorInput.style.display = 'none';
    AutoInput.style.display = 'none';
    ClienteInput.style.display = 'none';
    FacturaInput.style.display = 'none';
    ProductoInput.style.display = 'block';
    ProformaInput.style.display = 'none';
    break;
  case 'FACTURA':
    ProveedorInput.style.display = 'none';
    AutoInput.style.display = 'none';
    ClienteInput.style.display = 'none';
    FacturaInput.style.display = 'block';
    ProductoInput.style.display = 'none';
    ProformaInput.style.display = 'none';
    break;
  case 'AUTO':
    ProveedorInput.style.display = 'none';
    AutoInput.style.display = 'block';
    ClienteInput.style.display = 'none';
    FacturaInput.style.display = 'none';
    ProductoInput.style.display = 'none';
    ProformaInput.style.display = 'none';
    break;
 };
}

function handleRow(rowId) {
  let myRow = document.querySelector('#' + rowId);
  const cells = myRow.getElementsByTagName('td');

  myValue.textContent = cells[0].textContent;

  switch(tableName) {
    case 'PROVEEDOR':
      ProveedorInput.style.display = 'block';
      AutoInput.style.display = 'none';
      ClienteInput.style.display = 'none';
      FacturaInput.style.display = 'none';
      ProductoInput.style.display = 'none';
      ProformaInput.style.display = 'none';
      break;
    case 'PRODUCTO':
      ProveedorInput.style.display = 'none';
      AutoInput.style.display = 'none';
      ClienteInput.style.display = 'none';
      FacturaInput.style.display = 'none';
      ProductoInput.style.display = 'block';
      ProformaInput.style.display = 'none';
      break;
    case 'FACTURA':
      ProveedorInput.style.display = 'none';
      AutoInput.style.display = 'none';
      ClienteInput.style.display = 'none';
      FacturaInput.style.display = 'block';
      ProductoInput.style.display = 'none';
      ProformaInput.style.display = 'none';
      break;
    case 'AUTO':
      ProveedorInput.style.display = 'none';
      AutoInput.style.display = 'block';
      ClienteInput.style.display = 'none';
      FacturaInput.style.display = 'none';
      ProductoInput.style.display = 'none';
      ProformaInput.style.display = 'none';
      break;
   };



  // Aquí puedes acceder a los elementos de la fila y hacer lo que necesites con ellos
  
  for (let i = 0; i < cells.length; i++) {
    const cellValue = cells[i].textContent;
    // Haz algo con cellValue
    console.log('Valor de la celda:', cellValue); // Imprime el valor de la celda
  }
}

async function DoRequest(type, url, payload) {
  console.log(url)
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

var valorIngresado = document.getElementById("ruc").value;
console.log(valorIngresado);

