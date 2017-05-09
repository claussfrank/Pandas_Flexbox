var imagenes= document.getElementsByClassName('imagenClose');
var botones= document.getElementsByClassName('boton');
console.log(restaurar);
for (var i=0; i<imagenes.length; i++){
  imagenes[i].addEventListener("click",cerrarImagen);
}

function cerrarImagen(){
  this.style.display="none";
}
botones[2].addEventListener("click",restaurar);
function restaurar(){
  for(var i=0; i<imagenes.length;i++){
    imagenes[i].style.display="flex";
  }
}
