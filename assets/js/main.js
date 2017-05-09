var imagenes= document.getElementsByClassName('imagenClose');
var botones= document.getElementsByClassName('boton');
var origen = document.getElementById('origen');
var extincion = document.getElementById('extincion');
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

botones[0].addEventListener("click",mostraOrigen);

function mostraOrigen(){
  if (origen.style.visibility =="hidden"){
    origen.style.visibility = "visible";
  }else{
    origen.style.visibility = "hidden";
  }
}


botones[1].addEventListener("click",mostrarExtincion);

function mostrarExtincion(){
  if (extincion.style.visibility == "hidden"){
    extincion.style.visibility = "visible";
  }else {
    extincion.style.visibility="hidden";
  }
}
