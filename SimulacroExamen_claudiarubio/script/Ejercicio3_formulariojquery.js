$(document).ready(function () { //al cargar la página
    $('#nombre').focusout(function () { //listener sobre el input "nombre"
        var dato = $('#nombre').val(); //capturar el valor marcado
        validar("nombre", dato); //pasar el valor y el campo al metodo validar
    });

    $('#apellido').focusout(function () {//listener sobre el input "apellido"
        var dato = $('#apellido').val();
        validar("apellido", dato);
    });
})

/**
 * Función validar texto marcado dependiendo del nombre del input
 * @param {*} campo Dato String que corresponde al id del input
 * @param {*} texto Dato String tecleado por el usuario
 */
function validar(campo, texto) {
    switch (campo) { //se valida cual es el id del input
        case "nombre":
            if (texto == 'claudia') { //si corresponde al id nombre, valida que corresponda a "claudia"
                $('#boton_nombre').prop("disabled", false); //deshabilitar el 'dehabilitado' que esta por defecto 
            } else {
                $('#boton_nombre').prop("disabled", true); //si no es la palabra clave, volver a deshabilitar el boton
            }
            break;
        case "apellido":
            if (texto == 'rubio') { // si es el apellido, se valida que sea rubio
                $('#boton_apellido').prop("disabled", false);
            } else {
                $('#boton_apellido').prop("disabled", true);
            }
            break;
        default:
            break;
    }
}
