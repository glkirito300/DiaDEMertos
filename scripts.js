
// navigator.geolocation.getCurrentPosition(showPosition); 
// function showPosition(position) {
    // alert("Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude + " precisión: " + position.coords.accuracy)
    // }
inicio = 0;
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
    speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenido o bienvenido"+nombre_persona + "en este apartado de ayudare a entender mejor el altar de muertos, en esta parte de la pagina hay 4 botones que te diran información sin embargo, hay una trampa y una solución que desactiva la trampa, te dare una pista, siempre esta en ti necesitas de el para vivir, e incluso haces todo con el" + "tiene 30 segundos para desactivar la trampa, de lo contrario pierde, suerte usted puede"))
}
var boton1_de_mover = document.getElementById("boton1")
var boton2_de_mover = document.getElementById("boton2")
var boton3_de_mover = document.getElementById("boton3")
var boton4_de_mover = document.getElementById("boton4")
var body = document.getElementById("fondo")
var contenedor = document.getElementById("todo")
var activado = 0;
var btn1 = 0;
var btn2 = 0;
var btn3 = 0;
var btn4 = 0;
var voz_activa = 0;
function mover(numero){
    if(numero == 1 && activado == 0){
        if(btn1 == 0){
            boton1_de_mover.style.left="70%"
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
    voz_activa = 1;
    inicio = 1;
    speechSynthesis.speak( new SpeechSynthesisUtterance("Has desactivado la trampa"))
}

var bocina = document.getElementById("sonido");
Swal.fire({
    title: '¿Quieres iniciar el juego?',
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('iniciando juego', '', 'success')
        bocina.src="Final_fantasy_recortado.mp3"
       iniciar_conteo()
    } else if (result.isDenied) {
      Swal.fire('juego cancelado', '', 'info')
      window.location.href = "index.html";
    }
  })
  var contador_de_tiempo = document.getElementById("contador")
        function iniciar_conteo(){
        var n = 0;
        window.setInterval(function(){
        if(n  < 30 && inicio == 0){
          contador_de_tiempo.innerHTML = n;
          n++;
          if(n == 30){
              speechSynthesis.speak(new SpeechSynthesisUtterance("se acabo el tiempo los siento"))
              bocina.src = "derrota.mp3"
              bocina.removeAttribute("loop")
              Swal.fire({
                title: '¿Has perdido deseas intentarlo de nuevo?',
                confirmButtonText: 'reiniciar',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('reiniciando...', '', 'success')
                  window.location.href = "index.html";
                }
              })
              }
          if(n >= 20 && n < 30){
                  contador_de_tiempo.style.color = "red"
              }
        }
        },1000);
    }
    var conteo_de_mensajes = 0;     
    function hablar_pregunta(numero){
        if(voz_activa == 1 && numero == 1){
            bocina.src="Dani_alebrijes.ogg"
            conteo_de_mensajes++
            bocina.removeAttribute("loop")
            if(conteo_de_mensajes == 4){
                Swal.fire({
                    title: 'Felicidades has concluido con exito la primera parte del juego',
                    confirmButtonText: 'Siguiente parte',
                    denyButtonText: `reiniciar juego`,
                    backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://sweetalert2.github.io/images/nyan-cat.gif")
                    left top
                    no-repeat
  `
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Ahora es tiempo de un repaso', '', 'success')
                      window.location.href = "presentación.html";
                    } else if (result.isDenied) {
                      Swal.fire('Reiniciando juego.....', '', 'info')
                      window.location.href = "index.html";
                    }
                  })
            }
        }else if(voz_activa == 1 && numero == 2){
            bocina.src="betzy_catrina.ogg"
            bocina.removeAttribute("loop")
            conteo_de_mensajes++
            if(conteo_de_mensajes == 4){
                Swal.fire({
                    title: 'Felicidades has concluido con exito la primera parte del juego',
                    confirmButtonText: 'Siguiente parte',
                    denyButtonText: `reiniciar juego`,
                    backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://sweetalert2.github.io/images/nyan-cat.gif")
                    left top
                    no-repeat
  `
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Ahora es tiempo de un repaso', '', 'success')
                      window.location.href = "presentación.html";
                    } else if (result.isDenied) {
                      Swal.fire('Reiniciando juego.....', '', 'info')
                      window.location.href = "index.html";
                    }
                  })
            }
        }else if(voz_activa == 1 && numero == 3){
            bocina.src="manuel_que_es_el_dia_muertos.ogg"
            bocina.removeAttribute("loop")
            conteo_de_mensajes++
            if(conteo_de_mensajes == 4){
                Swal.fire({
                    title: 'Felicidades has concluido con exito la primera parte del juego',
                    confirmButtonText: 'Siguiente parte',
                    denyButtonText: `reiniciar juego`,
                    backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://sweetalert2.github.io/images/nyan-cat.gif")
                    left top
                    no-repeat
  `
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Ahora es tiempo de un repaso', '', 'success')
                      window.location.href = "presentación.html";
                    } else if (result.isDenied) {
                      Swal.fire('Reiniciando juego.....', '', 'info')
                      window.location.href = "index.html";
                    }
                  })
            }
        }else if(voz_activa == 1 && numero == 4){
            bocina.src="Daniel_mas_flor_sempasuchi.ogg"
            bocina.removeAttribute("loop")
            conteo_de_mensajes++
            if(conteo_de_mensajes == 4){
                Swal.fire({
                    title: 'Felicidades has concluido con exito la primera parte del juego',
                    confirmButtonText: 'Siguiente parte',
                    denyButtonText: `reiniciar juego`,
                    backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://sweetalert2.github.io/images/nyan-cat.gif")
                    left top
                    no-repeat
  `
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire('Ahora es tiempo de un repaso', '', 'success')
                      window.location.href = "presentación.html";
                    } else if (result.isDenied) {
                      Swal.fire('Reiniciando juego.....', '', 'info')
                      window.location.href = "index.html";
                    }
                  })
            }
        }
    } 
    function regresar_sonido_fondo(){
        bocinas = "sonido"
        bocina.src ="Final_fantasy_recortado.mp3";
        bocina.play()
    }
    function quitar_video(){
        document.getElementById("cont_video_iframe").style.setProperty("animation-name","salida_video");
        document.getElementById("video_div").style.setProperty("animation-name","salida_video");
        setTimeout(borrar_animación,7000)
    }
    function borrar_animación(){
        document.getElementById("cont_video_iframe").style.visibility = "hidden"
    }