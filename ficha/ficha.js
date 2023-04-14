const form = document.querySelector("form");
const nombre = document.getElementById("nombre_producto");
const cliente = document.getElementById("nombre_cliente");
const versiones = document.getElementById("versiones");
const versionactual = document.getElementById("version");
const modulo = document.getElementById("modulo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nombre.value === "" || cliente.value === "" || versiones.value === "" || versionactual.value === "" || modulo.value === "") 
  {
    alert("Por favor, complete todos los campos.");
  } else {
    alert("Formulario enviado correctamente.");
    form.reset();
  }
});
