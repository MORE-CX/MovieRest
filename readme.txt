
//---------------------------------EJECUCION SIN MONGODB---------------------------------//
Si desea correrlo sin la necesidad de mongodb, esto cambiaria el enlace a la base de datos
por una disponible online en "MLab" y cambiaria la carpeta del sitio a una compatible con 
la base online.

	Requisitos:
		*Node
		*Navegador Web

	Instrucciones:
		*Abrir el archivo "database.js" ubicado en la carpeta "config".

		*Comentar la linea 4 y descomentar la linea 5, quedando de la siguiente manera
			//url : 'mongodb://localhost:27017/peliculas'
			url : 'mongodb://mcxprueba:mcxprueba1@ds141812.mlab.com:41812/pruebamcx'

		*Cambie el nombre de la carpeta "dist" a "dist1", y la carpeta "dist2" a "dist"  
			"dist"		--->	"dist1"
			"dist2"		--->	"dist"

		*Luego corra el comando "npm start" estando ubicado el la raiz de la carpeta, donde 
		se encuentra el archivo "server.js".

		*Ir al enlace 
			http://localhost:8080/



//---------------------------------EJECUCION CON MONGODB---------------------------------//
Si desea correrlo con el mongodb.

	Requisitos:
		*Node
		*Mongodb
		*Navegador Web

	Instrucciones:
		*Corra el mongodb con el comando "mongod" y dejelo correr
		*Importe la coleccion ubicada en la carpeta "base" a la base de datos (la base
 		debe llamarse peliculas) con el siguiente comando:

			mongoimport -d peliculas -c peliculas output.json

		*Luego corra el comando "npm start" estando ubicado el la raiz de la carpeta,
		donde se encuentra el archivo "server.js".

		*Ir al enlace:
			http://localhost:8080/



//-----------------------------EJECUCION DESDE SITIO ONLINE-----------------------------//
Tambien puede probar la aplicacion desde el sitio online, alojado en el servidor free "Heroku"
	
	Requisitos:
		*Navegador Web

	Instrucciones:
		*Ir al enlace:
			https://movierest.herokuapp.com/