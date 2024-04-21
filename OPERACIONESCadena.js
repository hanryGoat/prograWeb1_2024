function evalua() {
    var cadena = document.getElementById("cadena").value;
    var cadenaMinusculas = cadena.toLowerCase();
    var cadenaMayusculas = cadena.toUpperCase();
    var mensaje="";

    if (cadena === cadenaMinusculas && cadena === cadenaMayusculas) {
        mensaje = " no contiene ni mayúsculas ni minúsculas.";
    } else if (cadena === cadenaMinusculas) {
       mensaje = " solo contiene solo minúsculas.";
    } else if (cadena === cadenaMayusculas) {
       mensaje = " solo contiene solo mayúsculas.";
    } else {
        mensaje = " solo contiene tanto mayúsculas como minúsculas.";
    }

    document.getElementById("parrafo").innerText = " la cadenna caracteres " + cadena + "\t" + mensaje;
}


