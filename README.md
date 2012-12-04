Ombuduy
=======

Proyecto para [Desarrollando América Latina 2012](http://2012.desarrollandoamerica.org/) desde Uruguay. Sitio para reportar problemas en tu ciudad como arreglos en la calle, basura, y similares.

# Setup
Copiar `config/config.yml.sample` a `config/config.yml` y agregar credenciales para la API de Twitter.

## Colaboradores
@fvillegas, @tombar, @banafederico, @picandocodigo

## Acerca De

### Problema a resolver

Los ciudadanos, usuarios de servicios municipales y estatales usan las redes sociales como medio de comunicación para expresar sus quejas y fallas en servicios. Esta aplicación pretende aprovechar esta masa crítica de incidentes reportados para hacer algo productivo con ello. Básicamente se trata de un intermediario entre la población y los entes responsables de poder trabajar sobre estos incidentes.

El objetivo es capturar quejas y reportes de problemas o incidentes de los ciudadanos a través de Twitter y otras redes sociales. La implementación inicial recupera datos solo de Twitter pero la idea es hacerlo disponible para las demás redes sociales y a través de un sitio web en sí mismo. 

Al capturar información con fotos y datos de geo localización, podemos obtener detalles de un problema del estilo: pozo en la calle, alumbrado público dañado o zonas sin iluminación, accidentes de tránsito, eventos culturales, etc.

La idea es conectarnos con las entidades pertinentes para lograr hacerles llegar estos reportes y que pueda llevarse una gestión de los incidentes a través de nuestra aplicación: Facilitándole a la población reportar incidentes y a los entes correspondientes recibir los reportes.

La arquitectura genérica de la aplicación permite su uso para otras varias funcionalidade. Es un sistema de colección y clasificación de información. La información es obtenida a través de un hashtag configurable, cuando este se detecta en un tweet.

### Potenciales beneficiarios

Los principales beneficiados por nuestra aplicación serían en principio los ciudadanos que al 

Los datos generados por la aplicación serán datos abiertos, y pretendemos crear herramientas para acceder a ellos de manera sencilla y amigable. Esto permitirá el estudio de los trabajos realizados, asuntos resueltos, demoras en las gestiones y demás.

También queremos trabajar junto a los entes para facilitarles la manera de recibir los incidentes y poder comnuicarse a través de nuestra aplicación con sus usuarios. No solo abriremos los datos sino que proveeremos una API

### Conjunto de datos usados

La aplicación utiliza datos abiertos de geolocalización a través de OpenStreetMap. Estos datos se alimentan de los datos liberados por la Intendencia de Montevideo. A su vez, los datos compilados en la aplicación son abiertos y serán ofrecidos a través de APIs para su utilización.

### Lista de funcionalidades

#### Actuales

 * Recupera tweets con un hashtag específico a través del API de Streams de Twitter.
 * Crea a partir de los tweets un reporte de incidente en el sistema.
 * Avisa al usuario a través de Twitter de la creación del reporte.
 * Si el tweet cuenta con datos de geolocalización, muestra un mapa con la ubicación del incidente.
 * Si el tweet cuenta con una fotografía del incidente, ésta se muestra en el reporte.
 * Respuestas y Retweets al tweet suman relevancia al incidente.

#### Futuras

 *
