const listaDeUsuarios = document.getElementById("lista-de-usuarios")

async function obtenerDatos() {
  const respuesta = await fetch(`http://localhost:3000/usuarios`)
  const datos = await respuesta.json()

  // Devuelvo solo los pokemones
  return datos
}

obtenerDatos()
  .then((usuarios) => {

    usuarios.forEach((usuario) => {
      const itemDeUsuario = document.createElement("li")
      itemDeUsuario.innerText = usuario.nombre

      listaDeUsuarios.appendChild(itemDeUsuario)
    })

  })