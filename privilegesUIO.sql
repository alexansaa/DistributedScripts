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
GRANT SELECT ON proveedor TO clieUIO;
GRANT SELECT ON producto TO clieUIO;
GRANT SELECT ON producto_gye TO clieUIO;
GRANT SELECT ON cliente_gye TO clieUIO;
GRANT SELECT ON factura_gye TO clieUIO;
GRANT SELECT ON auto TO clieUIO;
GRANT SELECT ON facilita TO clieUIO;
GRANT SELECT ON cliente_auto TO clieUIO;
GRANT SELECT ON detalle_proforma TO clieUIO;
GRANT SELECT ON detalle_factura TO clieUIO;
-- INSERT privilegios
GRANT INSERT ON proveedor TO clieUIO;
GRANT INSERT ON producto TO clieUIO;
GRANT INSERT ON producto_gye TO clieUIO;
GRANT INSERT ON cliente_gye TO clieUIO;
GRANT INSERT ON factura_gye TO clieUIO;
GRANT INSERT ON auto TO clieUIO;
GRANT INSERT ON facilita TO clieUIO;
GRANT INSERT ON cliente_auto TO clieUIO;
GRANT INSERT ON detalle_proforma TO clieUIO;
GRANT INSERT ON detalle_factura TO clieUIO;
-- UPDATE privilegios
GRANT UPDATE ON proveedor TO clieUIO;
GRANT UPDATE ON producto TO clieUIO;
GRANT UPDATE ON producto_gye TO clieUIO;
GRANT UPDATE ON cliente_gye TO clieUIO;
GRANT UPDATE ON factura_gye TO clieUIO;
GRANT UPDATE ON auto TO clieUIO;
GRANT UPDATE ON facilita TO clieUIO;
GRANT UPDATE ON cliente_auto TO clieUIO;
GRANT UPDATE ON detalle_proforma TO clieUIO;
GRANT UPDATE ON detalle_factura TO clieUIO;

PROMPT
PROMPT Privilegios avanzados de tablas para clieUIO, agregados con exito
