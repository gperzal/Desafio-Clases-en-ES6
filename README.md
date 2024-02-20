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

3. Configuración de Babel

Crea un archivo babel.config.json en la raíz del proyecto con el siguiente contenido:

<code>
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
</code>
4. Estructura del Proyecto
Crea una carpeta src para tu código fuente:

<code> 
mkdir src
cd src 
</code>

5. Transpilación de Código
Usa el siguiente comando para transpilar el código de la carpeta src a dist:

npx babel src/ -d dist/

O con configuración específica:

<code> npx babel src/ -d dist/ --config-file ./babel.config.json </code>


## Scripts en package.json
Edita tu package.json para incluir scripts útiles:

<code>
"scripts": {
  "start": "npm run build && node dist/main.js",
  "build": "npx babel src/ -d dist/ --config-file ./babel.config.json",
  "test": "echo \"Error: no test specified\" && exit 1"
}
</code>

## Uso
Para compilar y ejecutar el proyecto:

<code>npm start</code>


Este comando primero transpilará tu código de ES6+ a ES5 y luego ejecutará el archivo main.js desde la carpeta dist.


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
