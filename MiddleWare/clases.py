import json

#Tablas CENTRAL
class Proveedor:
    def __init__(self, Ruc, Nombre, Direccion, Telefono, Email):
        self.Ruc = Ruc
        self.Nombre = Nombre
        self.Direccion = Direccion
        self.Telefono = Telefono
        self.Email = Email

    def to_json(self):
        data = {
            "Ruc": self.Ruc,
            "Nombre": self.Nombre,
            "Direccion": self.Direccion,
            "Telefono": self.Telefono
        }

        return json.dumps(data)

class Producto:
    def __init__(self, Id, Costo, Descripcion, Marca, Modelo):
        self.Id = Id
        self.Costo = Costo
        self.Descripcion = Descripcion
        self.Marca = Marca
        self.Modelo = Modelo

    def to_json(self):
        data = {
            "Id": self.Id,
            "Costo": self.Costo,
            "Descripcion": self.Descripcion,
            "Marca": self.Marca,
            "Modelo": self.Modelo
        }

        return json.dumps(data)

class Factura:
    def __init__(self, Id_Factura, Id_Proforma, Fecha, Total, Ciudad):
        self.Id_Factura = Id_Factura
        self.Id_Proforma = Id_Proforma
        self.Fecha = Fecha
        self.Total = Total
        self.Ciudad = Ciudad

    def to_json(self):
        data = {
            "Id_Factura": self.Id_Factura,
            "Id_Proforma": self.Id_Proforma,
            "Fecha": self.Fecha,
            "Total": self.Total,
            "Ciudad": self.Ciudad
        }
        return json.dumps(data)

class Autos:
    def __init__(self, Id_Auto, Marca, Modelo, Cilindraje, Tipo):
        self.Id_Auto = Id_Auto
        self.Marca = Marca
        self.Modelo = Modelo
        self.Cilindraje = Cilindraje
        self.Tipo = Tipo

    def to_json(self):
        data = {
            "Id_Auto": self.Id_Auto,
            "Marca": self.Marca,
            "Modelo": self.Modelo,
            "Cilindraje": self.Cilindraje,
            "Tipo": self.Tipo
        }
        return json.dumps(data)
#Tablas UIO
    class Cliente:
    def __init__(self, Ruc_Cliente, Nombre, Direccion, Telefono, Email, Ciudad):
        self.Ruc_Cliente = Id_Auto
        self.Nombre = Nombre
        self.Direccion = Direccion
        self.Telefono = Telefono
        self.Email = Email
        self.Ciudad = Ciudad

    def to_json(self):
        data = {
            "Ruc_Cliente": self.Ruc_Cliente,
            "Nombre": self.Nombre,
            "Direccion": self.Direccion,
            "Telefono": self.Telefono,
            "Email": self.Email,
            "Ciudad": self.Ciudad
        }
        return json.dumps(data)
    class Proforma:
    def __init__(self, Id_Proforma, Ruc_Cliente, Placa, Fecha, Total, Ciudad):
        self.Id_Proforma = Id_Proforma
        self.Ruc_Cliente = Ruc_Cliente
        self.Placa = Placa
        self.Fecha = Fecha
        self.Total = Total
        self.Ciudad = Ciudad

    def to_json(self):
        data = {
            "Id_Proforma": self.Id_Proforma,
            "Ruc_Cliente": self.Ruc_Cliente,
            "Placa": self.Placa,
            "Fecha": self.Fecha,
            "Total": self.Total,
            "Ciudad": self.Ciudad
        }
        return json.dumps(data)
    class ClienteAuto:
    def __init__(self, Placa, Color, Id_Auto, Ruc_Cliente):
        self.Placa = Placa
        self.Color = Color
        self.Id_Auto = Id_Auto
        self.Ruc_Cliente = Ruc_Cliente

    def to_json(self):
        data = {
            "Placa": self.Placa,
            "Color": self.Color,
            "Id_Auto": self.Id_Auto,
            "Ruc_Cliente": self.Ruc_Cliente
        }    
        return json.dumps(data)
    class DetalleFactura:
    def __init__(self, Id_Factura, Id_Producto, Cantidad):
        self.Id_Factura = Id_Factura
        self.Id_Producto = Id_Producto
        self.Cantidad = Cantidad


    def to_json(self):
        data = {
            "Id_Factura": self.Id_Factura,
            "Id_Producto": self.Id_Producto,
            "Cantidad": self.Cantidad
        }    
        return json.dumps(data)