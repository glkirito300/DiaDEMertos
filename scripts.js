
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
var titulo = document.getElementById("titulo_c02");
function comentar(numero){
    if(numero == 1){
        titulo.innerHTML = "Escribe"
    }else if(numero == 0){
        titulo.innerHTML = "Altar virtual"
    }
}
function iniciar(){
    var nombre_persona = document.getElementById("nombre").value;
    speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenido o bienvenido"+nombre_persona + "en este apartado de ayudare a entender mejor el altar de muertos, en esta parte de la pagina hay 4 botones que te diran información sin embargo, hay una trampa y una solución que desactiva la trampa, te dare una pista, siempre esta en ti necesitas de el para vivir, e incluso haces todo con el"))
}
var boton1_de_mover = document.getElementById("boton1")
var boton2_de_mover = document.getElementById("boton2")
var boton3_de_mover = document.getElementById("boton3")
var boton4_de_mover = document.getElementById("boton4")
var body = document.getElementById("fondo")
var activado = 0;
var btn1 = 0;
var btn2 = 0;
var btn3 = 0;
var btn4 = 0;
function mover(numero){
    if(numero == 1 && activado == 0){
        if(btn1 == 0){
            boton1_de_mover.style.left="70%"
            boton1_de_mover.style.rotate="15deg"
            btn1 = 1;
        }else if(btn1 == 1){
            boton1_de_mover.style.left="0%"
            btn1 = 0;
        }
    }else if(numero == 2 && activado == 0){
        if(btn2 == 0){
            boton2_de_mover.style.left="50%"
            btn2 = 1;
        }else if(btn2 == 1 && activado == 0){
            boton2_de_mover.style.left="0%"
            btn2 = 0;
        }
    }else if(numero == 3 && activado == 0){
        if(btn3 == 0 && activado == 0){
            boton3_de_mover.style.left="90%"
            btn3 = 1;
        }else if(btn3 == 1 && activado == 0){
            boton3_de_mover.style.left="0%"
            btn3 = 0;
        }
    }else if(numero == 4 && activado == 0){
        if(btn4 == 0 && activado == 0){
            boton4_de_mover.style.left="30%"
            btn4 = 1;
        }else if(btn4 == 1 && activado == 0){
            boton4_de_mover.style.left="0%"
            btn4 = 0;
        }
    }
}
function desactivar(){
    activado = 1;
}
