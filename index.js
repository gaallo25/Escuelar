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
