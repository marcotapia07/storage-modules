// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('name');
    const displayName = document.getElementById('displayName');
    const clearStorageButton = document.getElementById('clearStorage');

    // Función para mostrar el nombre guardado
    function showName() {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            displayName.textContent = `Nombre guardado: ${storedName}`;
        } else {
            displayName.textContent = 'No hay nombre guardado.';
        }
    }

    // Mostrar el nombre guardado al cargar la página
    showName();

    // Manejar el envío del formulario
    nameForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir la recarga de la página
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('name', name);
            showName();
            nameInput.value = ''; // Limpiar el campo de entrada
        }
    });

    // Manejar la eliminación del nombre guardado
    clearStorageButton.addEventListener('click', () => {
        localStorage.removeItem('name');
        showName();
    });
});
