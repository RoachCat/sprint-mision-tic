const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const profesion = document.getElementById("profesion")
let persona = {
  nombre: "Sebastián",
  apellido: "Giraldo",
  edad: 25,
  profesion: "Developer"
}

nombre.addEventListener("click", () => {
  console.log(persona["profesion"])
})
