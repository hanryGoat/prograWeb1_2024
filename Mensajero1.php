<?php
if (isset($_POST['submit'])) {
    // Validar los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Verificar que el correo sea válido
    if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $para = "bautista.hdez.jony.08@gmail.com";
        $asunto = "Enviado informacion";
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $cuerpo = "Enviado por: $nombre <br> E-Mail: $correo <br> Mensaje: $mensaje <br>";
        
        // Utiliza la función mail() correctamente
        $bool = mail($para, $asunto, $cuerpo, $headers);

        if ($bool) {
            echo "El correo se envió correctamente.";
        } else {
            echo "Ocurrió un error al enviar el correo.";
        }
    } else {
        echo "La dirección de correo electrónico no es válida.";
    }
} else {
    echo "Ocurrió un error al procesar el formulario.";
}
?>
