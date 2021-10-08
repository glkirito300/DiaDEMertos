
var altar_muertos_iframe = document.getElementById("altar_3d");
var bocina_3_4_1 = document.getElementById("bocina_3_4");

Swal.fire({
    title: '¿iniciar el modelo 3d?',
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
    }
  })
  var numusi = 0;
  function cambio_musica(){
      if(numusi == 0){
        bocina_3_4_1.src ="Cecilia_Calaverita.mp3"
        numusi = 1;
      }else if(numusi == 1){
        bocina_3_4_1.src = "Aguilar _La_Llorona.mp3"
        numusi = 0;
      }
    }