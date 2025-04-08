const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    const query = input.value.toLowerCase();
    const elements = document.querySelectorAll('.mi-elemento'); // Reemplaza con tu selector

    elements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query)) {
            element.style.display = 'block'; // Muestra el elemento
        } else {
            element.style.display = 'none'; // Oculta el elemento
        }
    });
});