UNDEFINE dbName
UNDEFINE syspw

PROMPT 
PROMPT Especificar el nombre de la base de datos
DEFINE dbName		= &1

--
-- BEGIN
--

CONNECT clieCENTRAL/clieCENTRAL@&&dbName

-- CREATE TABLE factura AS 
-- SELECT * FROM factura_gye@CENTRAL_GYE
-- UNION
-- SELECT * FROM factura_uio@CENTRAL_UIO;

CREATE MATERIALIZED VIEW factura REFRESH FAST ON DEMAND START WITH TO_DATE ('27-07-2023 08:59:00', 'DD-MM-YYYY HH24:MI:SS') NEXT SYSDATE +1/1440 AS
-- SELECT * FROM factura_gye@CENTRAL_GYE
-- UNION
SELECT * FROM factura_uio@CENTRAL_UIO;

-- CREATE TABLE detalle_factura AS
-- SELECT * FROM detalle_factura@CENTRAL_GYE
-- UNION
-- SELECT * FROM detalle_factura@CENTRAL_UIO;

CREATE MATERIALIZED VIEW detalle_factura REFRESH FAST ON DEMAND START WITH TO_DATE ('27-07-2023 08:59:00', 'DD-MM-YYYY HH24:MI:SS') NEXT SYSDATE +1/1440 AS
-- SELECT * FROM detalle_factura@CENTRAL_GYE
-- UNION
SELECT * FROM detalle_factura@CENTRAL_UIO;

commit;
--
-- END
--

PROMPT
PROMPT Configuracion de tablas finales para nodo CENTRAL finalizado!