// Función para obtener una frase aleatoria en inglés de la API "Quotable"
async function obtenerFraseAleatoriaEnIngles() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error al obtener la frase:', error);
        return 'No se pudo obtener la frase.';
    }
}

// Función para traducir una frase de inglés a español utilizando la API de Google Cloud Translation
async function traducirFraseAlEspanol(frase) {
    try {
        const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: frase,
                source: 'en',
                target: 'es',
                format: 'text',
            }),
        });
        const data = await response.json();
        return data.data.translations[0].translatedText;
    } catch (error) {
        console.error('Error al traducir la frase:', error);
        return 'No se pudo traducir la frase.';
    }
}

// Función para generar y mostrar una frase aleatoria en español
async function generarFrase() {
    const fraseEnIngles = await obtenerFraseAleatoriaEnIngles();
    const fraseEnEspanol = await traducirFraseAlEspanol(fraseEnIngles);
    document.getElementById("frase").textContent = fraseEnEspanol;
}

// Event listener para el botón
document.getElementById("generarBtn").addEventListener("click", generarFrase);

// Generar una frase al cargar la página
generarFrase();
