# storage-modules
# Ejemplo de Local Storage en JavaScript

Este proyecto es un ejemplo sencillo de cómo utilizar el API de Local Storage en JavaScript. Permite a los usuarios ingresar su nombre, almacenarlo en el Local Storage del navegador, mostrar el nombre guardado en la página web y eliminar el nombre almacenado.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: Contiene la estructura HTML del proyecto.
- `script.js`: Contiene el código JavaScript que maneja el almacenamiento, recuperación y eliminación de datos en el Local Storage.
- `README.md`: Este archivo, que proporciona una descripción general del proyecto.

## Descripción de los Archivos

### index.html

Este archivo HTML contiene:

- Un formulario con un campo de texto para que el usuario ingrese su nombre y un botón para enviar el formulario.
- Un botón para eliminar el nombre almacenado en el Local Storage.
- Un párrafo donde se muestra el nombre guardado.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Local Storage</title>
</head>
<body>
    <h1>Ejemplo de Local Storage</h1>
    <form id="nameForm">
        <label for="name">Ingresa tu nombre:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Guardar Nombre</button>
    </form>
    <button id="clearStorage">Eliminar Nombre Guardado</button>
    <p id="displayName"></p>

    <script src="script.js"></script>
</body>
</html>
```
## script.js
Este archivo JavaScript contiene:

Una función para mostrar el nombre guardado en el Local Storage.
Un manejador de eventos para el envío del formulario, que guarda el nombre en el Local Storage y actualiza la visualización del nombre.
Un manejador de eventos para el botón de eliminar, que elimina el nombre del Local Storage y actualiza la visualización del nombre.

## Requisitos
Este proyecto solo requiere un navegador web moderno que soporte el API de Local Storage.

## Autor
Este ejemplo fue creado por Marco Tapia, Axel Pastillo, Erick Caiza y Lenin Masapanta.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
