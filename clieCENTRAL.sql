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

-- se crea el usuario que manipula las tablas distribuidas
CONNECT system/&&syspw@&&dbName
@@create_user clieCENTRAL clieCENTRAL

-- cambiamos de usuario para ejecutar scripts de configuracion
CONNECT clieCENTRAL/clieCENTRAL@&&dbName

-- se crea los data links a los otros nodos
@@datalinkCENTRAL

-- se crean las tablas locales con el nuevo usuario
@@tablesCENTRAL

-- se crean las vistas para lograr la transparencia de localizacion
@@viewsCENTRAL

--
-- END
--

PROMPT
PROMPT Configuracion de tablas para nodo CENTRAL finalizado!