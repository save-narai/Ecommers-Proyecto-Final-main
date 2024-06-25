const form = document.getElementById('survey-form');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Envío manual usando fetch
    const url = form.action;
    const formData = new FormData(form);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error en el envío del formulario');
        }

        // Limpiar el formulario si es exitoso
        form.reset();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
});