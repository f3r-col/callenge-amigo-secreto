// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.



//Crear un array para almacenar los nombres



const listaAmigos = [];
const inputAmigos = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");


//const btnAgregar = document.getElementById("btnAgregar");

//btnAgregar.addEventListener("click", agregarAmigo);


//Implementa una función para agregar amigos
/*
    Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

    Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

    Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/
function agregarAmigo() {
  /*  let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        input.value = "";
        console.log(amigos); // Para verificar que el nombre se ha añadido correctamente
    */


     // validar que el campo no esté vacío
    if (inputAmigos.value.trim() === "") {
        alert("El campo nombre no puede estar vacio");
        return; // Salir de la función si el campo está vacío
    }


    listaAmigos.push(inputAmigos.value);
    inputAmigos.value = "";
    console.log(listaAmigos); // Para verificar que el nombre se ha añadido correctamente
    ulListaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });

  }


  /*Descripción

Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

    Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

    Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

    Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

    Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
  */

    function sortearAmigo() {
        if (listaAmigos.length === 0) {
            alert("No hay amigos para sortear.");
            return; // Salir de la función si no hay amigos
        }   
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;
    }   
