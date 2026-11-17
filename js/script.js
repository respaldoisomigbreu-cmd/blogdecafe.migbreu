
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');    


nombreInput.addEventListener('input', leerTexto);   //input es un evento que se dispara cuando el usuario escribe o modifica el valor
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);


//elementos de un formulario submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
  //  console.log('Formulario Enviado');


// validar el formulario

const { nombre, email, mensaje } = datos;

if( nombre === '' || email === '' || mensaje === '' ) {
    mostrarAlerta('Todos los campos son obligatorios', error = true);
    return;
    }
// enviar el formulario correctamente.
mostrarAlerta('Mensaje Enviado Correctamente');
    
});

function leerTexto(e) {
     // console.log(e.target.value);
     datos[e.target.id] = e.target.value;   //almacena en el objeto datos el valor del input segun su id
    
  //   console.log(datos);
}   

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;       

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }   
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}