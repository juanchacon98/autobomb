document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar eventos y funciones para interactuar con los elementos de la página
    const measurementForm = document.getElementById('measurement-form');
    const dataTable = document.getElementById('data-table');
    const downloadDataButton = document.getElementById('download-data');

    // Evento para manejar el envío del formulario de mediciones
    measurementForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Obtener el volumen ingresado y realizar acciones, como enviarlo al Arduino o almacenarlo en la base de datos
        const volume = document.getElementById('volume').value;
        console.log('Volumen enviado:', volume);
        // Limpiar el campo de volumen
        document.getElementById('volume').value = '';
    });

    // Evento para manejar la descarga de datos
    downloadDataButton.addEventListener('click', () => {
        console.log('Descargar datos');
        // Aquí puedes implementar la lógica para descargar los datos almacenados en la base de datos
    });
});
