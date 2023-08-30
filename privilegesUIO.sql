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
GRANT SELECT ON proveedor, producto, producto_gye, cliente_gye, factura_gye, auto, facilita, cliente_auto, detalle_proforma, detalle_factura, proforma_gye TO clieUIO;
GRANT INSERT ON proveedor, producto, producto_gye, cliente_gye, factura_gye, auto, facilita, cliente_auto, detalle_proforma, detalle_factura, proforma_gye TO clieUIO;
GRANT UPDATE ON proveedor, producto, producto_gye, cliente_gye, factura_gye, auto, facilita, cliente_auto, detalle_proforma, detalle_factura, proforma_gye TO clieUIO;
GRANT DELETE ON proveedor, producto, producto_gye, cliente_gye, factura_gye, auto, facilita, cliente_auto, detalle_proforma, detalle_factura, proforma_gye TO clieUIO;

PROMPT
PROMPT Privilegios avanzados de tablas para clieUIO, agregados con exito
