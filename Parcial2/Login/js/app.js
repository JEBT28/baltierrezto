$(document).ready(function () {

  let modalIsOpen = false;

  $("#login").click(function () {
    var user = $("#user").val();
    var password = $("#password").val();
    // Checking for blank fields.
    if (user == "" || password == "") {
      alert("Los campos de inicio de sesión deben contener informacion");
    } else {
      $.post(
        "php/login.php",
        { user: user, password: password },
        function (data) {
            data = JSON.parse(data);
          if (data.msg == "Datos incorrectos") {
            $('input[type="text"],input[type="password"]').addClass("input-error");
            openModal("Error de credenciales", "Revise sus datos e intente de nuevo.");
          } else if (data.msg == "OK") {
            $("form")[0].reset();
            openModal("Bienvenido",data.name);
            $('input[type="text"],input[type="password"]').removeClass("input-error");
          } else {
            openModal("Error","Error desconocido");
          }
        }
      );
    }
  });

  $(".modal-overlay").click(closeModal);

  $(".modal-close").click(closeModal)

});


function openModal (title,content) {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  let titleModal = document.getElementById("title-modal");
  let contentModal = document.getElementById("content-modal");
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');  
  modal.classList.toggle('hidden');
  titleModal.innerHTML=title;
  contentModal.innerHTML=content;
}

function closeModal(){
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');  
  modal.classList.toggle('hidden');
}

