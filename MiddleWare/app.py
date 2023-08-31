from flask import Flask, request, jsonify
from flask_cors import CORS
import cx_Oracle
import clases
import json

username = 'clieUIO'
password = 'clieUIO'
dsn = 'localhost:1521/orcl'

TableIds = {
    "PROVEEDOR": "Ruc",
    "PRODUCTO": "Id",
    "AUTO": "Id_Auto",
    "FACILITA": "Id",
    "AUTO": "Id_Auto",
    "CLIENTE": "Ruc_Cliente",
    "PROFORMA": "Id_Proforma",
    "FACTURA": "Id_Factura",
    "AUTO": "Id_Auto",
    "CLIENTE_AUTO": "Placa",
    "DETALLE_PROFORMA": "Id",
    "DETALLE_FACTURA": "Id",
}

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM PROVEEDOR')
    for row in cursor:
        print(row)
        print(type(row))
    cursor.close()
    connection.close()
    return "<p>Hello, World!</p>"

@app.route('/table', methods=['GET'])
def get_table():
    # tableName tiene que ser un nombre de tabla valido
    tableName = request.args.get('tableName')
    tableName = tableName.upper()

    if tableName is None:
        return jsonify({'error': 'Missing arguments'}), 400

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'SELECT * FROM ' + tableName
    print(sqlStatement)
    cursor.execute(sqlStatement)

    myAns = []
    
    # Convertimos en JSON
    for reg in cursor:
        if tableName == 'PROVEEDOR':
            tmpObj = clases.Proveedor(reg[0], reg[1], reg[2],reg[3], reg[4])
            #myAns.append(json.dumps(tmpObj.to_json()))
        elif tableName == 'PRODUCTO':
            tmpObj = clases.Producto(reg[0], reg[1], reg[2], reg[3], reg[4])
        elif tableName == 'FRACTURA':
            tmpObj = clases.Fractura(reg[0], reg[1], reg[2], reg[3], reg[4])
        elif tableName == 'AUTOS':
            tmpObj = clases.Autos(reg[0], reg[1], reg[2], reg[3], reg[4])
        elif tableName == 'CLIENTE':
            tmpObj = clases.Cliente(reg[0], reg[1], reg[2], reg[3], reg[4], reg[5])
        elif tableName == 'CLIENTEAUTO':
            tmpObj = clases.ClienteAuto(reg[0], reg[1], reg[2], reg[3])
        elif tableName == 'DETALLEFACTURA':
            tmpObj = clases.DetalleFactura(reg[0], reg[1], reg[2])

        myAns.append(tmpObj.to_json())

    return myAns

@app.route('/create/<string:tableName>', methods=['POST'])
def create_element():
    if tableName is None:
        return jsonify({'error': 'Missing tableName'}), 400

    payload = request.get_json()

    if payload is None or not payload:
        return jsonify({'error': 'Missing payload'}), 400

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'INSERT INTO ' + tableName + ' VALUES ('

    print(payload)


#    INSERT INTO employees (first_name, last_name, age, department)
#VALUES ('John', 'Doe', 30, 'Sales');


    
#    print(sqlStatement)
#    cursor.execute(sqlStatement)

#    tableName = upper(tableName)

#    if tableName is None:
#        return jsonify({'error': 'Missing arguments'}), 400

#    connection = cx_Oracle.connect(username,password, dsn)
#    cursor = connection.cursor()
#    sqlStatement = 'SELECT * FROM ' + tableName
#    print(sqlStatement)
#    cursor.execute(sqlStatement)
    # falta retornar como json
#    for row in cursor:
#        print(row)
#    return "<p>table is ok!</p>"

@app.route('/delete_item/<string:tableName>/<string:item_id>', methods=['DELETE'])
def delete_element(tableName, item_id):
    if tableName is None or item_id is None:
        return jsonify({'error': 'Missing arguments'}), 400

    # tableName y item_id tienen que ser argumentos valido
    tableName = request.args.get('tableName')
    tableName = tableName.upper()

    tmpTableId = TableIds[tableName]

    conditionValue = ''
    if isinstance(item_id, str):
        conditionValue = " = '" + item_id + "'"
    else:
        conditionValue = " = " + item_id

    print('condition: ' + conditionValue)    

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'DELETE FROM ' + tableName + ' WHERE ' + tmpTableId + conditionValue
    print(sqlStatement)
#    cursor.execute(sqlStatement)
    # falta retornar como json
#    for row in cursor:
#        print(row)
    return "<p>delete on table is ok!</p>"

@app.route('/edit/<string:tableName>/<string:item_id>', methods=['POST'])
def edit_element():
    if tableName is None or item_id is None:
        return jsonify({'error': 'Missing arguments'}), 400

    tableName = request.args.get('tableName')
    tableName = tableName.upper()

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()

    sqlStatement = 'UPDATE ' + tableName + ' SET '

    #AGREGAR VALORES DE REGISTRO

    conditionValue = ''
    if isinstance(item_id, str):
        conditionValue = " = '" + item_id + "'"
    else:
        conditionValue = " = " + item_id

    print('condition: ' + conditionValue)  

    sqlStatement = sqlStatement + ' WHERE ' + conditionValue
    
    print(sqlStatement)
    cursor.execute(sqlStatement)
    # falta retornar como json
    #for row in cursor:
    #    print(row)
    #return "<p>table is ok!</p>"

if __name__ == '__main__':
    app.run(debug=True)