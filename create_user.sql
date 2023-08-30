UNDEFINE clieName
UNDEFINE cliePass

PROMPT
PROMPT Nombre de usuario a crear:
DEFINE clieName         = &1

PROMPT
PROMPT Password de cliente:
DEFINE cliePass         = &2

SET ECHO OFF

--
-- BEGIN
--

-- creamos usuario
CREATE USER &&clieName IDENTIFIED BY &&cliePass
 DEFAULT TABLESPACE USERS
 TEMPORARY TABLESPACE TEMP
 PROFILE DEFAULT;

-- agregamos privilegios
GRANT CONNECT, RESOURCE TO &&clieName;
ALTER USER &&clieName QUOTA UNLIMITED ON USERS;
GRANT CREATE MATERIALIZED VIEW TO &&clieName;
GRANT CREATE DATABASE LINK TO &&clieName;
GRANT CREATE VIEW TO &&clieName;
--
-- END
--

PROMPT
PROMPT Se ha creado correctamente el usuario &&clieName