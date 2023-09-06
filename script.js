document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const randomPhraseElement = document.getElementById("randomPhrase");

    generateButton.addEventListener("click", async function () {
        // Obtener una frase aleatoria en inglés de JSONPlaceholder
        const randomResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" + Math.floor(Math.random() * 100));
        const randomData = await randomResponse.json();
        const englishPhrase = randomData.title;

        // Traducir la frase al español usando la API de Traducción de Google Cloud
        const translationResponse = await fetch("https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                q: englishPhrase,
                source: "en",
                target: "es",
                format: "text",
            }),
        });
        const translationData = await translationResponse.json();
        const spanishPhrase = translationData.data.translations[0].translatedText;

        // Mostrar la frase traducida en la página
        randomPhraseElement.textContent = `Frase en español: ${spanishPhrase}`;
    });
});
