// app.js

const nombresAmigos = []; // Array para guardar los nombres de amigos

document.addEventListener('DOMContentLoaded', () => {

    const inputNombreAmigo = document.querySelector('.input-name');
    const botonAnadir = document.querySelector('.button-add');
    const listaDeAmigosUL = document.querySelector('#listaAmigos');
    const botonSortear = document.querySelector('.button-draw'); // Captura el botón "Sortear amigo"
    const resultadoUL = document.querySelector('#resultado'); // 1. Capturar la lista <ul> de resultados


    botonAnadir.addEventListener('click', () => {
        console.log("Botón 'Añadir' clickeado"); 

        botonSortear.addEventListener('click', () => { // Event listener para el botón "Sortear amigo"
            console.log("Botón 'Sortear amigo' clickeado"); // Mensaje de prueba

            if (nombresAmigos.length < 2) { // 1. Verificar si hay al menos 2 nombres en la lista
                alert("Debes añadir al menos dos amigos para realizar el sorteo."); // Mostrar alerta si no hay suficientes nombres
            } else {
                // 2. Si hay suficientes nombres, realizar el sorteo aleatorio
                const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
                const amigoSecreto = nombresAmigos[indiceAleatorio];
        
                console.log("Índice aleatorio:", indiceAleatorio);
                console.log("Amigo secreto sorteado:", amigoSecreto);
        
                // 2. Crear un elemento <li> para mostrar el resultado
                const nuevoItemResultado = document.createElement('li');
        
                // 3. Establecer el texto del <li> con el mensaje y el nombre del amigo secreto
                nuevoItemResultado.textContent = "Tu amigo secreto es: " + amigoSecreto; // Concatenar el mensaje y el nombre
        
                // 4. Limpiar el contenido anterior de la lista de resultados (opcional, pero buena práctica, por si acaso)
                resultadoUL.innerHTML = ''; // Limpia la lista <ul> antes de añadir un nuevo resultado
        
                // 5. Añadir el <li> a la lista <ul> de resultados en la página web
                resultadoUL.appendChild(nuevoItemResultado);
            }
        });
    

        const nombreAmigo = inputNombreAmigo.value; 

        if (nombreAmigo.trim() === "") { 
            alert("Por favor, escribe un nombre antes de añadir."); 
        } else {
            // 1. Agregar el nombre al array nombresAmigos
            nombresAmigos.push(nombreAmigo); 
            console.log("Nombre añadido al array:", nombreAmigo); // Para verificar

            // 2. Crear un elemento <li> para el nombre
            const nuevoItemLista = document.createElement('li'); 

            // 3. Configurar el texto del <li> con el nombre
            nuevoItemLista.textContent = nombreAmigo; 

            // 4. Agregar el <li> a la lista <ul> en la página web
            listaDeAmigosUL.appendChild(nuevoItemLista); 

            // 5. Limpiar el campo de texto
            inputNombreAmigo.value = ""; 
        }
    });

});