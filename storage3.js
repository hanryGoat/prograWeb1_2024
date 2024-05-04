// script.js

function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoItem, false);
    mostrar();
}

function nuevoItem() {
    var seccion = document.getElementById('seccion').value;
    var valor = document.getElementById('texto').value;
    
    if (seccion && valor) {
        localStorage.setItem(seccion, valor);
        mostrar();
        document.getElementById('seccion').value = '';
        document.getElementById('texto').value = '';
    } else {
        alert("Por favor ingresa una sección y una contraseña.");
    }
}

function mostrar() {
    var cajaDatos = document.getElementById('cajadatos');
    cajaDatos.innerHTML = '';

    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var seccion = localStorage.key(i);
            var valor = localStorage.getItem(seccion);
            cajaDatos.innerHTML += '<div><strong>' + seccion + '</strong> - ' + valor + '</div>';
        }
    } else {
        cajaDatos.innerHTML = '<div>No hay información disponible</div>';
    }
}

window.addEventListener('load', iniciar, false);

function elimina()
{

	if(confirm('Está Seguro?')){
		localStorage.clear();
		mostrar();
		}
}