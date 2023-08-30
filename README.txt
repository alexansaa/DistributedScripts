Para implementar este proyecto, se tiene que instalar los clientes en los nodos correspondientes. Para realizar esto, se requiere que se ejecute
en el nodo correspondiente, el script "clieXXX" dependiendo del nodo en cuestion. Cada script esta identificado con el nombre del nodo al
que pertenece y por tanto el nodo en el cual se ejecutara. Este script va a consumir el script "create_user" para crear el usuario correspondiente
y sus correspondientes "datalinkXXX, tablesXXX y viewsXXX" de cada nodo.

En caso de que exista un error, se puede ocupar el script restore en cualquier nodo de forma que se borre el cliente creado y todos los datos asociados
al cliente como las tablas, links y vistas.

Con respecto al nodo CENTRAL, se requiere ejecutar un script mas al finalizar las instalaciones de todos los nodos. Este se denomina "finalCENTRAL"