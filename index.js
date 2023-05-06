if (screen.width < 900) {
  let widthContainer = document.getElementById("grid-tarjetas");
  let derecha = document.getElementById("flecha-derecha");

  let containercardsaprendemos = document.getElementById(
    "container-cards-aprendemos"
  );
  let containercardscrecimiento1 = document.getElementById(
    "container-cards-crecimiento"
  );
  let containercardscrecimiento2 = document.getElementById(
    "container-cards-crecimiento2"
  );
  let next = document.getElementById("flecha-derecha");
  let prev = document.getElementById("flecha-izquierda");
  let contadorcrecimiento = 1;
  let contadortarjetas = 1;
  let contadorAprendemos = 1;
  let circulos = document.querySelectorAll(".circulos");

  let image = widthContainer;
  let imageContent = document.querySelectorAll(".container-tajeta");
  let imageContentMath = imageContent.length * 100;
  let counter = 0;
  circulos[0].style.border = "2px solid red";
  widthContainer.style.width = imageContentMath + "%";
  prev.addEventListener("click", (e) => {
    if (counter == 0) {
      counter = imageContentMath - 100;
      circulos[counter / 100].style.border = "2px solid red";
      circulos[0].style.border = "none";
      image.style.marginLeft = "-" + counter + "%";
    } else {
      counter = counter -= 100;
      image.style.marginLeft = "-" + counter + "%";
      circulos[counter / 100 + 1].style.border = "none";
      circulos[counter / 100].style.border = "2px solid red";
    }
  });

  next.addEventListener("click", (e) => {
    if (counter == imageContentMath - 100) {
      counter = 0;
      circulos[counter / 100].style.border = "2px solid red";
      circulos[circulos.length - 1].style.border = "none";
      image.style.marginLeft = "-" + counter + "%";
    } else {
      counter = counter += 100;
      image.style.marginLeft = "-" + counter + "%";
      circulos[counter / 100 - 1].style.border = "none";
      circulos[counter / 100].style.border = "2px solid red";
    }
  });
  /*   console.log(circulos);
  circulos[0].style.border = "2px solid red";
  next.addEventListener("click", () => {
    if (contadortarjetas == 7) {
      contadortarjetas = 1;
    }
    if (contadortarjetas == 6) {
      tarjetas.style.marginLeft = "0%";
      circulos[circulos.length - 1].style.border = "none";
      circulos[0].style.border = "2px solid red";
    } else {
      circulos[contadortarjetas - 1].style.border = "none";
      tarjetas.style.marginLeft = "-" + contadortarjetas + "00%";
      circulos[contadortarjetas].style.border = "2px solid red";
    }

    contadortarjetas++;
  });
  prev.addEventListener("click", () => {
    if (contadortarjetas == 1) {
      tarjetas.style.marginLeft = "-500%";
      contadortarjetas = 5;
    } else {
      tarjetas.style.marginLeft = "-" + contadortarjetas + "00%";
    }
    console.log(contadortarjetas);
    contadortarjetas--;
  }); */
  /*  setInterval(() => {
    if (contadortarjetas == 7) {
      contadortarjetas = 1;
    }
    tarjetas.style.marginLeft = "-" + contadortarjetas + "00%";
    contadortarjetas++;
    console.log("hola");
  }, 3000); */
  /* 
  setInterval(() => {
    if (contadorAprendemos == 5) {
      contadorAprendemos = 1;
    }
    containercardsaprendemos.style.marginLeft =
      "-" + contadorAprendemos + "00%";
    contadorAprendemos++;
  }, 8000);
  setInterval(() => {
    if (contadorcrecimiento == 3) {
      contadorcrecimiento = 1;
    }
    containercardscrecimiento1.style.marginLeft =
      "-" + contadorcrecimiento + "00%";
    containercardscrecimiento2.style.marginLeft =
      "-" + contadorcrecimiento + "00%";
    contadorcrecimiento++;
  }, 2000); */
}

let departamento = document.getElementById("departamento");
let ciudad = document.getElementById("ciudad");

let $consultar = document.getElementById("consultarCedula");
$consultar.addEventListener("click", () => {
  let numeroCedula = document.getElementById("cedula").value;

  Swal.fire({
    title: "Espera",
    text: "Estamos consultando tu información",
    imageUrl: "https://c.tenor.com/K2UGDd4acJUAAAAC/load-loading.gif",
    imageWidth: 150,
    imageHeight: 150,
    showConfirmButton: false,
    imageAlt: "Custom image",
  });

  fetch("http://localhost:3000/cliente")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        RegistroCliente(data);
      }, 2000);
    });
});

function RegistroCliente(data) {
  if (data.clienteID != null) {
    Swal.fire({
      icon: "success",
      title: "Registrado",
      text: "El cliente ya se encuentra registrado",
    });
    let nombre = document.getElementById("nombres");
    let apellidos = document.getElementById("apellidos");
    let documento = document.getElementById("documento");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let direccion = document.getElementById("direccion");

    nombre.value = data.clienteName;
    apellidos.value = data.clienteApellido;
    documento.value = data.documentoNumero;
    telefono.value = data.clienteName;
    email.value = data.email;
    direccion.value = data.direccion;
    ObtenerDepartamento(dptos, data.departamentoID, data.ciudadID);
    if (data.tipoDocumentoID != null) {
      let tipodocumento = document.getElementById("tipoDocumentoID");

      tipodocumento.selectedIndex =
        data.tipoDocumentoID == 7 ? 5 : data.tipoDocumentoID;
      let requerido = document.getElementById("requerido");
      requerido.style.display = "none";
    } else {
      document.getElementById("generar").disabled = true;
      document.getElementById("editar").disabled = false;
      document.getElementById("guardar").disabled = true;
    }

    let formulario = document.getElementById("formulario");
    formulario.style.display = "block";
  } else {
    Swal.fire({
      icon: "error",
      title: "Cliente no registrado",
      text: "Por favor ingresa tus datos y dale guardar",
    });
    let tipodocumento = document.getElementById("tipoDocumentoID");
    tipodocumento.disabled = false;
    let formulario = document.getElementById("formulario");
    formulario.style.display = "block";
    document.getElementById("generar").disabled = true;
    document.getElementById("editar").disabled = true;
    document.getElementById("guardar").disabled = false;
  }
  document.addEventListener("click", (e) => {
    if (e.target.id == "guardar") {
      e.preventDefault();
      let nombre = document.getElementById("nombres").value;
      let apellidos = document.getElementById("apellidos").value;
      let tipodocumentoID = document.getElementById("tipoDocumentoID").value;
      let documento = document.getElementById("documento").value;
      let telefono = document.getElementById("telefono").value;
      let email = document.getElementById("email").value;
      let direccion = document.getElementById("direccion").value;
      let departamentoID;
      let departamentoNombre = departamento.value;
      dptos.forEach((e) => {
        if (e.departamentoName == departamentoNombre) {
          departamentoID = e.departamentoID;
        }
      });
      /* fetch('https://panacaservices.azurewebsites.net/api/clientecrm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    'clienteNombre': clienteNombre,
                    'clienteApellido': clienteApellido,
                    'documentoNumero': documentoNumero,
                    'fechaNacimientoTimeStamp ': fechaNacimientoTimeStamp,
                    'celularNumero': celularNumero,
                    'email': email,
                    'departamentoID': departamentoID,
                    'tipoDocumentoID': tipoDocumentoID
                })
        })
            .then(response => response.json())
            .then((data) => {
              RegistroCliente(data)
            }); */
    }
    if (e.target.id == "editar") {
      e.preventDefault();
      let miFormulario = document.getElementById("formulario");

      // Obtener todos los elementos input del formulario
      let elementosInput = miFormulario.getElementsByTagName("input");
      for (var i = 0; i < elementosInput.length; i++) {
        elementosInput[i].disabled = false;
      }
      let tipodocumento = document.getElementById("tipoDocumentoID");
      tipodocumento.disabled = false;
      document.getElementById("guardar").disabled = false;
    }
  });
}

function ObtenerCiudades(departamentoId, ciudadID) {
  $("ciudad").empty();
  fetch(
    "https://panacaservices.azurewebsites.net/api/ciudad?departamentoId=" +
      departamentoId
  )
    .then((response) => response.json())
    .then((data) => {
      ObtenerCiudad(data, ciudadID);
    });
}
function ObtenerDepartamento(data, id, ciudadID) {
  data.forEach((item) => {
    if (id == item.departamentoID) {
      departamento.value = item.departamentoName;
      ObtenerCiudades(item.departamentoID, ciudadID);
    }
  });
}
function ObtenerCiudad(data, id) {
  data.forEach((element) => {
    if (element.ciudadID == id + 99) {
      ciudad.value = element.ciudadName;
    }
  });
}
