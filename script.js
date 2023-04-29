document.getElementById('submit-btn').addEventListener('click', async () => {
    const volumen = parseFloat(document.getElementById('volumen-input').value);
    const fecha = document.getElementById('fecha-input').value;
    const hora = document.getElementById('hora-input').value;

    try {
        const response = await fetch('/submit-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ volumen, fecha, hora })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
        } else {
            alert('Error: ' + data.message);
        }
    } catch (err) {
        console.error(err);
        alert('Error: Unable to connect to the server.');
    }
});
