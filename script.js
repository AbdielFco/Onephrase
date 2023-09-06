// Función para obtener una frase aleatoria de la API "Quotable"
async function obtenerFraseAleatoria() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error al obtener la frase:', error);
        return 'No se pudo obtener la frase.';
    }
}

// Función para generar y mostrar una frase aleatoria
async function generarFrase() {
    const fraseAleatoria = await obtenerFraseAleatoria();
    document.getElementById("frase").textContent = fraseAleatoria;
}

// Event listener para el botón
document.getElementById("generarBtn").addEventListener("click", generarFrase);

// Generar una frase al cargar la página
generarFrase();
