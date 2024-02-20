# Desafío - Clases en ES6

Este proyecto es una demostración de cómo utilizar Babel para transpilar código JavaScript de ES6+ a ES5, asegurando la compatibilidad con versiones anteriores de navegadores y entornos. Ideal para proyectos Full Stack que buscan maximizar la compatibilidad.

## Finalidad

El propósito de este proyecto es demostrar la configuración y uso de Babel en un entorno de desarrollo moderno, permitiendo a los desarrolladores utilizar las últimas características de JavaScript sin preocuparse por la compatibilidad del entorno de ejecución.


## Guía Básica para Instalar Babel

Sigue estos pasos para configurar tu proyecto con Babel

1. Inicializar el Proyecto (En la Terminal)
   
 <code>npm init -y</code>

2. Instalar Dependencias de Babel (En la Terminal):

<code>npm install --save-dev @babel/preset-env @babel/cli @babel/core @babel/polyfill core-js  </code>

3. Transpilación de Código
Usa el siguiente comando para transpilar el código de la carpeta src a dist:

npx babel src/ -d dist/

O con configuración específica:

<code> npx babel src/ -d dist/ --config-file ./babel.config.json </code>

## Uso
Para compilar y ejecutar el proyecto:

<code>npm start</code>


Este comando primero transpilará tu código de ES6+ a ES5 y luego ejecutará el archivo main.js desde la carpeta dist.

## Personalización del Archivo main.js
Dentro del archivo main.js, puedes personalizar ciertos parámetros según tus necesidades. Localiza y edita las siguientes variables:

- impuestos: Esta se divide en 2 parametros segun el metodo calcularImpuesto()
    - montoBrutoAnual: 
        Define el monto bruto anual. (1er Parametro de impuestos)
    - Deducciones: 
        Especifica las deducciones aplicables.(2do Parametro de impuestos).

- cliente: Corresponde al nombre del cliente para el cálculo de impuestos.

## Contribuir

Las contribuciones son lo que hacen a la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será muy apreciada.

Si tienes una sugerencia para mejorar esto, por favor bifurca el repositorio y crea un pull request. También puedes simplemente abrir un issue con la etiqueta "mejora".

- Bifurca el Proyecto
- Crea tu Rama de Característica (git checkout -b feature/AmazingFeature)
- Haz Commit de tus Cambios (git commit -m 'Add some AmazingFeature')
- Push a la Rama (git push origin feature/AmazingFeature)
- Abre un Pull Request

## Contacto

Si tienes alguna pregunta o deseas contribuir al proyecto, puedes contactarme a través de:

- WhatsApp: [+5998876935](https://wa.me//5998876935)
- LinkedIn: [Guido Perez Zelaya](https://www.linkedin.com/in/guido-perez-zelaya-3b6a32113/)
- GitHub: [@gperzal](https://github.com/gperzal)

Todos los derechos e Izquierdos reservados por Guido Perez para Desafio Latam 2024 - G64.
