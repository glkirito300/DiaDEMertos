var bocina2 = document.getElementById("sonido2")
var boton_salida = document.getElementById("btn1_3")
var diapo = document.getElementById("diapositivas")
Swal.fire({
    title: '¿iniciar presentación?',
    confirmButtonText: 'si',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('iniciando....', '', 'success')
      bocina2.src="fondo_pag_3_re.mp3";
      boton_salida.style.visibility = "visible"
      diapo.src="https://docs.google.com/presentation/d/e/2PACX-1vS7Xc0o-5Ux3g088U5Gftbj0c8hO1VB0p8EJcQym5DgcpMtf_Ua_xfugYr80O1iJw/embed?start=true&loop=true&delayms=3000"
    }
  })

  function salir_quedarse(){
    Swal.fire({
      title: '¿pasar al modelo 3d?',
      text: "Se mostrara el modelo 3d",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Entendido',
          'iniciando evalución',
          'success'
          )
          window.location.href = "Altar_muertos.html";
      }
    })
  } 