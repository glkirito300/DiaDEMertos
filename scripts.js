
// navigator.geolocation.getCurrentPosition(showPosition); 
// function showPosition(position) {
// alert("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude + " precisión: " + position.coords.accuracy)
// }
var imagen1 = document.getElementById("imagen1")
var imagen2 = document.getElementById("imagen2")
var imagen3 = document.getElementById("imagen3")
var imagen4 = document.getElementById("imagen4")
function voz(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenido"))
}
function ponerimagen(numero){
if(numero == 1){
imagen1.style.display = "block";
} else if (numero == 2){
    imagen2.style.display = "block";
} else if(numero == 3){
    imagen3.style.display = "block";
}else if(numero == 4){
    imagen4.style.display = "block";
}
}
function quitarimagen(numero){
    if(numero == 1){
        imagen1.style.display = "none";
    }else if(numero == 2){
        imagen2.style.display = "none";
    }else if (numero == 3){
        imagen3.style.display = "none";
    }else if(numero == 4){
        imagen4.style.display = "none";
    }
}
function hablar(numero){
if (numero == 1){
    speechSynthesis.speak(new SpeechSynthesisUtterance("has escogido la Respuesta numero 1"))
} else if(numero == 2){
    speechSynthesis.speak(new SpeechSynthesisUtterance("has escogido la Respuesta numero 2"))
}else if(numero == 3){
    speechSynthesis.speak(new SpeechSynthesisUtterance("has escogido la Respuesta numero 3"))
}else{
    speechSynthesis.speak(new SpeechSynthesisUtterance("en un momento repetire la información"))
}
}
      