from flask import Flask
import cx_Oracle

username = 'clieUIO'
password = 'clieUIO'
dsn = 'localhost:1521/orcl'

app = Flask(__name__)

@app.route("/")
def hello_world():
    connection = cx_Oracle.connect(username,password, dsn)
    # cursor = connection.cursor()
    # cursor.execute('SELECT * FROM CLIENTE_AUTO')
    # for row in cursor:
    #     print(row)
    # cursor.close()
    # connection.close()
    return "<p>Hello, World!</p>"