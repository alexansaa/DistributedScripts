UNDEFINE userName
UNDEFINE sysPass
UNDEFINE dbName

PROMPT
PROMPT Ingrese el nombre de usario a borrar:
DEFINE userName         = &1
PROMPT 
PROMPT Especificar password para usuario SYSTEM
DEFINE sysPass     	= &2
PROMPT 
PROMPT Especificar el nombre de la base de datos
DEFINE dbName		= &3

CONNECT system/&&sysPass@&&dbName
DROP USER &&userName CASCADE;


