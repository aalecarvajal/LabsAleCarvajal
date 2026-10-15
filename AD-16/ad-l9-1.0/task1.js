const botonJsstyle = document.querySelector("#jsstyle");

botonJsstyle.addEventListener("click", () => {
  const parrafo = document.querySelector("#parrafo");
  parrafo.style.color = "blue";
  parrafo.style.fontSize = "20px";
  parrafo.style.fontWeight = "bold";
});
