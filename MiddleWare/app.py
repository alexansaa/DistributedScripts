from flask import Flask, request, jsonify
from flask_cors import CORS
import cx_Oracle
import clases
import json

username = 'clieUIO'
password = 'clieUIO'
dsn = 'localhost:1521/orcl'

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

    print(myAns)

#    for row in cursor:
#        print(row)
    return myAns

@app.route('/create', methods=['POST'])
def create_element():
    # tableName tiene que ser un nombre de tabla valido
    data = request.get_json()

    if 'tableName' not in data or 'tableKey' not in data or 'payload' == None:
        return jsonify({'error': 'Missing arguments'}), 400
    
    #aqui falta implementar el metodo completo

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'SELECT * FROM ' + tableName
    print(sqlStatement)
    cursor.execute(sqlStatement)

    tableName = upper(tableName)

    if tableName is None:
        return jsonify({'error': 'Missing arguments'}), 400

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'SELECT * FROM ' + tableName
    print(sqlStatement)
    cursor.execute(sqlStatement)
    # falta retornar como json
    for row in cursor:
        print(row)
    return "<p>table is ok!</p>"

#@app.route('/delete_item/<str:tableName>/<str:item_id>', methods=['DELETE'])
#def delete_element(tableName, item_id):
#    if tableName is None or item_id is None:
#        return jsonify({'error': 'Missing arguments'}), 400

    #implementar metodo

    # tableName tiene que ser un nombre de tabla valido
#    tableName = request.args.get('tableName')
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

@app.route('/edit', methods=['POST'])
def edit_element():
    # implementar
    # tableName tiene que ser un nombre de tabla valido
    tableName = request.args.get('tableName')
    tableName = upper(tableName)

    if tableName is None:
        return jsonify({'error': 'Missing arguments'}), 400

    connection = cx_Oracle.connect(username,password, dsn)
    cursor = connection.cursor()
    sqlStatement = 'SELECT * FROM ' + tableName
    print(sqlStatement)
    cursor.execute(sqlStatement)
    # falta retornar como json
    for row in cursor:
        print(row)
    return "<p>table is ok!</p>"

if __name__ == '__main__':
    app.run(debug=True)