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

## Comandos Git (PowerShell)

Si aún no tienes el repositorio inicializado y quieres subir este proyecto a GitHub, puedes usar los siguientes comandos en PowerShell:

```powershell
cd "c:\Users\F3R_O\Documents\ONE\2025\AMIGO SECRETO\challenge-amigo-secreto_esp-main\challenge-amigo-secreto_esp-main"
git init
git add .
git commit -m "Initial commit: app Amigo Secreto"
git branch -M main
# Crear el repo en GitHub y pegar la URL abajo, por ejemplo:
# git remote add origin https://github.com/USUARIO/REPO.git
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

Si ya tienes un repositorio remoto configurado y solo quieres subir cambios:

```powershell
cd "c:\Users\F3R_O\Documents\ONE\2025\AMIGO SECRETO\challenge-amigo-secreto_esp-main\challenge-amigo-secreto_esp-main"
git add .
git commit -m "Actualizar README y mejoras menores"
git push
```

## Licencia

Proyecto abierto para uso educativo. No se especifica licencia.

---

Si quieres, puedo también:
- Añadir un `LICENSE` (MIT, Apache-2.0, etc.).
- Añadir persistencia con `localStorage` en `app.js`.
- Preparar un archivo `.gitignore` útil para proyectos web.
