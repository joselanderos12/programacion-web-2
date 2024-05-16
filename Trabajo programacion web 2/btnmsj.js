

document.addEventListener('DOMContentLoaded', function() {
    
    const boton = document.getElementById('mensaje');

    
    boton.addEventListener('click', function() {
        
        alert('¡Enviado satisfactoriamente!');
    });
});

function validarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let comentarios = document.getElementById("comentarios").value;


    if (nombre !== "" && apellido !== "" && correo !== "" && telefono !== "" && comentarios !== "") {
        if (!(nombre.length >= 2 && apellido.length >= 2)) {
            alert('El nombre y el apellido deben tener al menos 2 caracteres.');
        } else {
            alert('Enviado satisfactoriamente! Gracias por comunicarse con nosotros.');
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}




function ValidarRegistro() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    if (nombre !== "" && apellido !== "" && correo !== "" && contraseña !== "") {
        if (!(nombre.length >= 2 && apellido.length >= 2)) {
            alert('El nombre y el apellido deben tener al menos 2 caracteres.');
        } else if (!correo.includes('@')) {
            alert('El correo electrónico debe contener el símbolo "@"');
        } else {
            alert('¡Registro completado!');
            window.location.href = 'iniciosesion.html';
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}



function obtenerDatos() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;


    if (usuario !== "" && contraseña !== "") {
        if (!(usuario.includes('@') && usuario.length >= 5)) {
            alert('Correo inválido. Por favor, ingrese uno válido, Ej: ( usuarioelectro@gmail.com ).');
        }
        else if (!(contraseña.length >= 8)) {
            alert('La contraseña debe tener al menos 8 caracteres.');
        }
        else {
            alert('¡Iniciando sesión!');
            window.location.href = 'index2.html';
        }
    } else {

        alert('Por favor, complete todos los campos.');
    }
}




