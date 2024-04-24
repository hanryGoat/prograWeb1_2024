function genera_rfc() {
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var apellidoPaterno = document.getElementById("ap").value.toUpperCase();
    var apellidoMaterno = document.getElementById("am").value.toUpperCase();
    var anioNacimiento = document.getElementById("anio").value.slice(-2);
    var mesNacimiento = document.getElementById("mes").value.padStart(2, '0');
    var diaNacimiento = document.getElementById("dia").value.padStart(2, '0');

    var letra1Apellido = apellidoPaterno.charAt(0);
    var letra2Apellido = '';
    for (var i = 1; i < apellidoPaterno.length; i++) {
        if (/[AEIOU]/.test(apellidoPaterno.charAt(i))) {
            letra2Apellido = apellidoPaterno.charAt(i);
            break;
        }
    }
    if (letra2Apellido === '') {
        letra2Apellido = apellidoPaterno.charAt(1);
    }

    var letraApellidoMaterno = apellidoMaterno.charAt(0);

    var rfc = letra1Apellido + letra2Apellido + letraApellidoMaterno + nombre.charAt(0) + anioNacimiento + mesNacimiento + diaNacimiento;

    document.getElementById("resultado").value = rfc;
}



