//OBTENER OBJETOS DEL DOM

var imagenBig = document.getElementById("imagenBig"); //div para la imagen grande
var imagenPeq = document.getElementsByTagName("img"); //array con imagenes pequenias

//listener sobre cada imagen de la galeria
for (let i = 0; i < imagenPeq.length; i++) {
    $(imagenPeq[i]).click(function(){
        console.log("ha clicado una imagen");

        let ruta = imagenPeq[i].src; //ruta de la imagen clicada

        $("#imagenBig").attr('src', ruta); //accedemos al div imgFull y le ponemos el src que hemos leido de la imagen clicada
    }); 
}