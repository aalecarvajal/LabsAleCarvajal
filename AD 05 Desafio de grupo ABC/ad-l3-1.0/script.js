const colores = ["green", "blue", "red"];

function colorAleatorio() {
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}

const titulos = document.querySelectorAll("h5");

titulos.forEach(function (h5) {
    h5.addEventListener("click", function () {
        h5.style.color = colorAleatorio();
    });
});