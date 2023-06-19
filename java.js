/*___________________________________________________________*/
/*En el código anterior, hemos utilizado los eventos
 onmouseover (cuando el cursor pasa por encima de la imagen) y
onmouseout (cuando el cursor sale de la imagen) 
para llamar a las funciones cambiarImagen y restaurarImagen, respectivamente.

Dentro de la función cambiarImagen, utilizamos document.getElementById('miImagen') 
para obtener la referencia al elemento de imagen por su ID (miImagen)
 y luego asignamos la nueva imagen al atributo src utilizando nuevaImagen.

En la función restaurarImagen, volvemos a asignar la imagen original 
al atributo src utilizando imagenOriginal.*/
function cambiarImagen(nuevaImagen) {
  document.getElementById('miImagen').src = nuevaImagen;
}

function restaurarImagen(imagenOriginal) {
  document.getElementById('miImagen').src = imagenOriginal;
}
/*--------------------------------------------------------------*/
