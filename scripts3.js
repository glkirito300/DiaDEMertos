
var altar_muertos_iframe = document.getElementById("altar_3d");
var bocina_3_4_1 = document.getElementById("bocina_3_4");

Swal.fire({
    title: '¿iniciar el modelo 3D?',
    text: "Permitira ver el altar",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Si'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'iniciando.....',
        'De click en ok para continuar',
        'success'
      )
    altar_muertos_iframe.style.visibility = "visible"
    cambio_musica()
    qued_sal = 1;
    }
  })
  var numusi = 0;
  var qued_sal = 0;
  function cambio_musica(){
      if(numusi == 0){
        bocina_3_4_1.src ="Cecilia_Calaverita.mp3"
        numusi = 1;
          if(qued_sal == 1){
            salir_mensaje()
          }
      }else if(numusi == 1){
        bocina_3_4_1.src = "Aguilar _La_Llorona.mp3"
        numusi = 0;
          if(qued_sal == 1){
            salir_mensaje()
          }
      }
    }
    function salir_mensaje(){
      Swal.fire({
        title: 'El juego a finalizado ¿quiere permanecer aqui o salir?',
        showDenyButton: true,
        confirmButtonText: 'Querdarse',
        denyButtonText: `salir`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Entendido', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Regresando al inicio......', '', 'info')
          window.location.href = "index.html";
        }
      })
     
    }