document.getElementById('formulario-contacto').addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('¡Gracias por tu mensaje, '+ nombre +'! Me pondre en contacto contigo pronto.');
        this.reset()
    } else {
        alert('Por favor, llenar todos los campos antes de enviar.');
    }
});