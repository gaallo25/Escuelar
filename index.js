if (screen.width < 900) {
  var widthContainer = document.getElementById("grid-tarjetas");
  var derecha = document.getElementById("flecha-derecha");

  var containercardsaprendemos = document.getElementById(
    "container-cards-aprendemos"
  );
  var containercardscrecimiento1 = document.getElementById(
    "container-cards-crecimiento"
  );
  var containercardscrecimiento2 = document.getElementById(
    "container-cards-crecimiento2"
  );

  var circulos = document.querySelectorAll(
    ".container-banner-principal .circulos"
  );

  var image = widthContainer;
  var imageContent = document.querySelectorAll(".container-tajeta");
  var imageContentMath = imageContent.length * 100;
  var counter = 0;
  alert("lo coge" + counter);
  circulos[0].style.border = "2px solid red";
  widthContainer.style.width = imageContentMath + "%";

  var startX; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd(event) {
    var endX = event.changedTouches[0].clientX; // Obtener la posición final en X
    var deltaX = endX - startX; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX) > 100) {
      // Acción a realizar en el evento de deslizamiento similar a un clic

      // Aquí puedes agregar la lógica para realizar la acción deseada
      if (deltaX > 0) {
        if (counter == 0) {
          alert("deberia mover" + counter);
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
      } else {
        alert("deberia mover lala" + counter);
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
      }
    }
  }

  var myElement = document.getElementById("grid-tarjetas");

  // Agregar controladores de eventos táctiles al elemento
  myElement.addEventListener("touchstart", handleTouchStart, false);
  myElement.addEventListener("touchend", handleTouchEnd, false);

  /* var widthContainer2 = document.getElementById("container-cards-crecimiento");
  var circulos2 = document.querySelectorAll(".modelo-formativo .circulos");
  console.log(circulos2);
  var image2 = widthContainer2;
  var imageContent2 = document.querySelectorAll(
    "#container-cards-crecimiento .card-crecimiento"
  );
  var imageContentMath2 = imageContent2.length * 100;
  var counter2 = 0;
  circulos2[0].style.border = "2px solid red";
  widthContainer2.style.width = imageContentMath2 + "%";
  var startX2; // Posición inicial en X al inicio del deslizamiento
  console.log("hola");
  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart2(event) {
    startX2 = event.touches[0].clientX; // Guardar la posición inicial en X
  }

  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd2(event) {
    var endX = event.changedTouches[0].clientX; // Obtener la posición final en X
    var deltaX = endX - startX2; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX) > 10) {
      // Acción a realizar en el evento de deslizamiento similar a un clic

      // Aquí puedes agregar la lógica para realizar la acción deseada
      if (deltaX > 0) {
        if (counter2 == 0) {
          counter2 = imageContentMath2 - 100;
          circulos2[counter2 / 100].style.border = "2px solid red";
          circulos2[0].style.border = "none";
          image2.style.marginLeft = "-" + counter2 + "%";
        } else {
          counter2 = counter2 -= 100;
          image2.style.marginLeft = "-" + counter2 + "%";
          circulos2[counter2 / 100 + 1].style.border = "none";
          circulos2[counter2 / 100].style.border = "2px solid red";
        }
      } else {
        console.log("Clic simulado");
        if (counter2 == imageContentMath2 - 100) {
          counter2 = 0;
          circulos2[counter2 / 100].style.border = "2px solid red";
          circulos2[circulos2.length - 1].style.border = "none";
          image2.style.marginLeft = "-" + counter2 + "%";
        } else {
          counter2 = counter2 += 100;
          image2.style.marginLeft = "-" + counter2 + "%";
          circulos2[counter2 / 100 - 1].style.border = "none";
          circulos2[counter2 / 100].style.border = "2px solid red";
        }
      }
    }
  }

  var myElement2 = document.getElementById("container-cards-crecimiento");

  // Agregar controladores de eventos táctiles al elemento
  myElement2.addEventListener("touchstart", handleTouchStart2, false);
  myElement2.addEventListener("touchend", handleTouchEnd2, false); */
}
