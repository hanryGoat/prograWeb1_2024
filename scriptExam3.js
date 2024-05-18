// Función para determinar si una frase es un palíndromo
function palindromo(cadena) {
    // Inicia el resultado con la frase inicoial
    var resultado = "La frase \"" + cadena + "\"\n";
    
    //ayuda a las palabras mayusculas a convertirlas a minusculas 
    var cadenaOriginal = cadena.toLowerCase();
    
    // hace la cadena de caracteres 
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    
    // borra los espacios en blanco
    for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    
    // crea la lista de la cadena normal y al inverso
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    
    // con prueba si es un polindromo
    for (i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false; // Si encuentra una diferencia, establece iguales como falso
        }
    }
    
    // añade el resultado si es o no un polindromo
    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    
    // Retornar el resultado
    return resultado;
}

// para mostrar el resultado si es un polindromo
function evaluarPalindromo() {
    //obtiene la frase en el parrafo
    var frase = document.getElementById("frase").value;
    
    // Evaluar si la frase es un palíndromo
    var resultado = palindromo(frase);
    
    // muestra el resultado en id resultado
    document.getElementById("resultado").innerText = resultado;
}
