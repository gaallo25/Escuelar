if (screen.width < 900) {
  let tarjetas = document.getElementById("grid-tarjetas");
  let containercardsaprendemos = document.getElementById(
    "container-cards-aprendemos"
  );
  let containercardscrecimiento1 = document.getElementById(
    "container-cards-crecimiento"
  );
  let containercardscrecimiento2 = document.getElementById(
    "container-cards-crecimiento2"
  );
  let contadorcrecimiento = 1;
  let contadortarjetas = 1;
  let contadorAprendemos = 1;
  setInterval(() => {
    if (contadortarjetas == 6) {
      contadortarjetas = 1;
    }
    tarjetas.style.marginLeft = "-" + contadortarjetas + "00%";
    contadortarjetas++;
  }, 8000);
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
  }, 2000);
}
