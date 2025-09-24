# Amigo Secreto

Pequeña aplicación web (HTML/CSS/JavaScript) para gestionar una lista de amigos y realizar un sorteo aleatorio del "amigo secreto".

## Descripción

Proyecto didáctico para practicar lógica de programación y manipulación del DOM. Permite:
- Añadir nombres a una lista.
- Mostrar la lista de participantes.
- Sortear aleatoriamente un nombre de la lista y mostrar el resultado.

## Estructura del proyecto

- `index.html` — Interfaz de usuario.
- `style.css` — Estilos.
- `app.js` — Lógica principal (agregar nombres y sortear).
- `assets/` — Imágenes usadas en la interfaz.

## Uso

1. Abrir `index.html` en el navegador.
2. Escribir un nombre en el campo y hacer clic en **Añadir** para agregarlo a la lista.
3. Repetir hasta tener todos los participantes.
4. Hacer clic en **Sortear amigo** para elegir aleatoriamente un nombre. El resultado se mostrará en la sección de resultado.

Notas de implementación:
- La entrada se valida: no se permiten nombres vacíos.
- Los nombres añadidos se muestran en una lista (`#listaAmigos`).
- El sorteo usa `Math.random()` para seleccionar un índice aleatorio.


## Licencia

Proyecto abierto para uso educativo. No se especifica licencia.

---

Si quieres, puedo también:
- Añadir un `LICENSE` (MIT, Apache-2.0, etc.).
- Añadir persistencia con `localStorage` en `app.js`.
- Preparar un archivo `.gitignore` útil para proyectos web.
