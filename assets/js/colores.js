let colorGlobal = "";

function cambiarColorNegro(id) {
  document.getElementById(id).addEventListener("click", () => {
    document.getElementById(id).style.backgroundColor = "black";
  });
}

cambiarColorNegro("azul");
cambiarColorNegro("rojo");
cambiarColorNegro("verde");
cambiarColorNegro("amarillo");

document.addEventListener("keydown", function(event) {
  const keyDiv = document.getElementById("key");

  // Cambiar color para a, s, d
  if (event.key === "a") {
    colorGlobal = "pink";
    keyDiv.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    colorGlobal = "orange";
    keyDiv.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    colorGlobal = "skyblue";
    keyDiv.style.backgroundColor = "skyblue";
  }

  // Crear un nuevo div para q, w, e
  let nuevoDiv;
  if (event.key === "q") {
    nuevoDiv = crearDivColor("purple");
  } else if (event.key === "w") {
    nuevoDiv = crearDivColor("gray");
  } else if (event.key === "e") {
    nuevoDiv = crearDivColor("brown");
  }

  if (nuevoDiv) document.body.appendChild(nuevoDiv);
});

// Función para crear nuevo div con color específico
function crearDivColor(color) {
  const div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.backgroundColor = color;
  div.style.border = "1px solid black";
  div.style.marginTop = "10px";
  return div;
}
