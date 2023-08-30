UNDEFINE dbName
UNDEFINE syspw

PROMPT 
PROMPT Especificar el nombre de la base de datos
DEFINE dbName		= &1
PROMPT 
PROMPT Especificar password para usuario SYSTEM
DEFINE syspw     	= &2

--
-- BEGIN
--

-- se mejora los privilegios del usuario CENTRAL
CONNECT system/&&syspw@&&dbName

-- se agregan privilegios extra
-- SELECT privilegios
GRANT SELECT ON clieUIO.PROVEEDOR TO clieUIO;
GRANT SELECT ON clieUIO.PRODUCTO TO clieUIO;
GRANT SELECT ON clieUIO.PRODUCTO_GYE TO clieUIO;
GRANT SELECT ON clieUIO.CLIENTE_GYE TO clieUIO;
GRANT SELECT ON clieUIO.FACTURA_GYE TO clieUIO;
GRANT SELECT ON clieUIO.AUTO TO clieUIO;
GRANT SELECT ON clieUIO.FACILITA TO clieUIO;
GRANT SELECT ON clieUIO.CLIENTE_AUTO TO clieUIO;
GRANT SELECT ON clieUIO.DETALLE_PROFORMA TO clieUIO;
GRANT SELECT ON clieUIO.DETALLE_FACTURA TO clieUIO;
-- INSERT privilegios
GRANT INSERT ON clieUIO.PROVEEDOR TO clieUIO;
GRANT INSERT ON clieUIO.PRODUCTO TO clieUIO;
GRANT INSERT ON clieUIO.PRODUCTO_GYE TO clieUIO;
GRANT INSERT ON clieUIO.CLIENTE_GYE TO clieUIO;
GRANT INSERT ON clieUIO.FACTURA_GYE TO clieUIO;
GRANT INSERT ON clieUIO.AUTO TO clieUIO;
GRANT INSERT ON clieUIO.FACILITA TO clieUIO;
GRANT INSERT ON clieUIO.CLIENTE_AUTO TO clieUIO;
GRANT INSERT ON clieUIO.DETALLE_PROFORMA TO clieUIO;
GRANT INSERT ON clieUIO.DETALLE_FACTURA TO clieUIO;
-- UPDATE privilegios
GRANT UPDATE ON clieUIO.PROVEEDOR TO clieUIO;
GRANT UPDATE ON clieUIO.PRODUCTO TO clieUIO;
GRANT UPDATE ON clieUIO.PRODUCTO_GYE TO clieUIO;
GRANT UPDATE ON clieUIO.CLIENTE_GYE TO clieUIO;
GRANT UPDATE ON clieUIO.FACTURA_GYE TO clieUIO;
GRANT UPDATE ON clieUIO.AUTO TO clieUIO;
GRANT UPDATE ON clieUIO.FACILITA TO clieUIO;
GRANT UPDATE ON clieUIO.CLIENTE_AUTO TO clieUIO;
GRANT UPDATE ON clieUIO.DETALLE_PROFORMA TO clieUIO;
GRANT UPDATE ON clieUIO.DETALLE_FACTURA TO clieUIO;

PROMPT
PROMPT Privilegios avanzados de tablas para clieUIO, agregados con exito
