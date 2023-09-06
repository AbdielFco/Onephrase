// Función para obtener una frase aleatoria en español de la API "Frases de la Vida"
async function obtenerFraseAleatoria() {
    try {
        const response = await fetch('https://api.frasesvida.com/v1/random');
        const data = await response.json();
        return data.data.frase;
    } catch (error) {
        console.error('Error al obtener la frase:', error);
        return 'No se pudo obtener la frase.';
    }
}

// Función para generar y mostrar una frase aleatoria en español
async function generarFrase() {
    const fraseAleatoria = await obtenerFraseAleatoria();
    document.getElementById("frase").textContent = fraseAleatoria;
}

// Event listener para el botón
document.getElementById("generarBtn").addEventListener("click", generarFrase);

// Generar una frase al cargar la página
generarFrase();
