# Weather and forecast
## Descripcion

Aplicación backend de consulta de clima que pueda visualizar el clima actual y pronostico de los próximos 5 días para la ciudad actual segun ip y de otras 5 ciudades seleccionables. Se consumen los servicios de dos api's externas, Open Weather Map, para informacion climatica, y IP-API para datos de localizacion por IP.
## Construido con

* [Express](https://expressjs.com/)
* [Axios](https://axios-http.com/)
* [Nodemon](https://nodemon.io/)
* [Dotenv](https://github.com/motdotla/dotenv#readme)
* [Jest](https://jestjs.io/)
* [Supertest](https://github.com/visionmedia/supertest)
* [Open Weather Map](https://openweathermap.org/)
* [Ip-Api](http://ip-api.com/json/)
## Requisitos

- Para probar el proyecto es necesario tener instalado el entorno Node
- Clonar con git o descargar el repositorio de github
- Instalar las dependencias
- Obtener una ApiKey gratuita en https://openweathermap.org/

```bash
git clone https://github.com/AG350/clima-challenge.git

npm i
```
Una vez instalado debera crear el archivo .env para declarar las variables de entorno que requiere el proyecto.
En la raiz del repositorio puede encontrar un ejemplo de archivo, a continuacion la descripcion de las mismas:

    - API_KEY: Clave de acceso a la api de clima Open Weather Map
    - PORT: Puerto que va a utilizar la aplicacion
    - UNITS: Unidad de medida de los datos de la api de clima
    - LANG: Lenguaje de la descripcion de los reportes climaticos
    - URL_API_WEATHER: Url base de la aplicacion de clima
    - URL_API_IP: Url base de la aplicacion de localizacion por ip

Completado lo previamente mensionado puede untilizar los siguientes scrips para  la opcion que desee

- start             -> para desplegar la aplicacion
- dev               -> para monitorear en modo de desarrollo
- test              -> para correr la suits de testeo
- test:coverage     -> para correr las suits de testeo y ver la cobertura de testeo
- test:watch        -> para correr el monitor de testeo

```bash
    npm run start
    npm run dev
    npm run test
    npm run test:coverage
    npm run test:watch
```
## Descripcion de endpoints

### Ruta base:

* #### /v1

Esta es la base para acceder a los otros endpoints, si se accede a la misma o cualquier otra que no sea las que se mencionan a continuacion, recibira una respuesta con status 404 y un mensaje "Not Found".

### Servicios: 

* #### /v1/location

Utiliza los datos de cabecera de peticion para obtener la direccion IP del cliente, con el cual devuelve los datos de localizacion del mismo. Si la direccion ip por algun motivo no coincidiera o tenga un formato no valido, el mismo respondera con un status de 404 y un mensaje de "Location not found".
    
* #### /v1/current

El endpoint requiere los datos de la cabecera de la peticion para identificar la localizacion de la peticion, a tra vez de la cual obtiene los datos climaticos actuales de la misma.

* #### /v1/current/[:city]

el edpoint admite un parametro opcional que utiliza para identificar una localizacion y la informacion climatica actual de la misma, si el parametro ingresado no coincide con ninguna ciudad de la base de datos, este respondera con un valor de status 404 y el mensaje de "City not found".

* #### /v1/forecast 

Este edpoint requiere los datos de cabecera de la peticion, para obtener la direccion IP de la misma, a tra vez de la cual obtiene la localizacion, y la ultiza para responder con el pronostico extendido  a 5 días de la ubicacion.

* #### host/v1/forecast/[:city]

el edpoint admite un parametro opcional que utiliza para identificar una localizacion y con ella devuelve un json con el nombre de la ciudad y el pronostico extendido a 5 dias. Si el parametro ingresado no coincide con ninguna ciudad de la base de datos, este respondera con un valor de status 404 y el mensaje de "City not found".

## Importante

Para realizar pruebas en un servidor local, debe agregar de forma manual a la cabecera de la peticion la key X-Forwarded-For con alguna ip valida, ya que express toma el valor del localhost.