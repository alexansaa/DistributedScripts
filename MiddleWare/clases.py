import json

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