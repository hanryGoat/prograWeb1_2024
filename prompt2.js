function multi() {
    var num = prompt('Ingresa un numero (1-10)', '');
    num = parseInt(num);

    if (isNaN(num) || num < 1 || num > 10) {
        alert('ingrese otro valor');
        return;
    }

    var tablaMultiplicar = document.getElementById('tablaMultiplicar');
    tablaMultiplicar.innerHTML = '';
    var x = 1;
    for (x = 1; x <= 10; x++) {
        var tabla = num * x;
        tablaMultiplicar.innerHTML += num + " x " + x + " = " + tabla + "<br>";
    }
}
