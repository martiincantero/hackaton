// Navegación entre secciones
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const target = button.getAttribute('data-section');
        document.getElementById(target).classList.add('active');
    });
});

// Funcionalidad de notificaciones
function showNotification(message) {
    const notificationsContainer = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    notificationsContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Funcionalidad de encender/apagar luces
document.getElementById('lights-control').addEventListener('click', (event) => {
    const button = event.target;
    if (button.dataset.status === 'off') {
        button.dataset.status = 'on';
        button.textContent = 'Apagar luces';
        button.classList.add('green');
        showNotification('Luces encendidas.');
    } else {
        button.dataset.status = 'off';
        button.textContent = 'Encender luces';
        button.classList.remove('green');
        showNotification('Luces apagadas.');
    }
});

// Control de temperatura
const tempSlider = document.getElementById('temperature-slider');
const tempValue = document.getElementById('temperature-value');
const adjustTempButton = document.getElementById('adjust-temperature');

adjustTempButton.addEventListener('click', () => {
    const isVisible = tempSlider.style.display === 'block';
    tempSlider.style.display = isVisible ? 'none' : 'block';
    tempValue.style.display = isVisible ? 'none' : 'block';
});

tempSlider.addEventListener('input', (event) => {
    tempValue.textContent = `Temperatura: ${event.target.value}°C`;
});

// Buscar dispositivo
document.getElementById('add-device').addEventListener('click', () => {
    const searchStatus = document.getElementById('device-search-status');
    searchStatus.style.display = 'block';
    setTimeout(() => {
        searchStatus.style.display = 'none';
        showNotification('Nuevo dispositivo encontrado y añadido.');
    }, 3000);
});

// Configurar dispositivos
document.getElementById('configure-devices').addEventListener('click', () => {
    const deviceList = document.getElementById('device-list');
    const isVisible = deviceList.style.display === 'block';
    deviceList.style.display = isVisible ? 'none' : 'block';
});

// Eliminar dispositivos
document.querySelectorAll('.remove-device').forEach(button => {
    button.addEventListener('click', (event) => {
        const listItem = event.target.closest('li');
        listItem.remove();
        showNotification('Dispositivo eliminado.');
    });
});





