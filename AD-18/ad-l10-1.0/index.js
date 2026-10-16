const itemsContainer = document.querySelector("#list-items")
const btnBorrar = document.querySelector("#btn-borrar")
const btnCargar = document.querySelector("#btn-cargar")

btnCargar.addEventListener("click", ()=>{
  fetchColorsList()
})

btnBorrar.addEventListener("click", ()=>{
  localStorage.removeItem("colores")
  itemsContainer.innerHTML = ""
   
})

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown?per_page=12")
    .then(response => response.json())
    .then(colores => {
      console.log(colores)
      itemsContainer.innerHTML = ""
      colores.data.forEach(item => addItem(item))
      localStorage.setItem("colores", JSON.stringify(colores.data)) 
    })
}

function loadColorsFromStorage() {
  const colores = localStorage.getItem("colores")
  if (colores !== null) { 
    const listaColores = JSON.parse(colores)  
    listaColores.forEach(item => addItem(item))
  }
}



loadColorsFromStorage()

