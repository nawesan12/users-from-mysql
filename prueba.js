class UserCard extends HTMLElement {
  constructor() {
    super()

    this.nombre = this.getAttribute("nombre") ?? "Usuario desconocido"
    this.edad = this.getAttribute("edad") ?? "Edad desconocida"

    const html = `
      <li>
        <p>Nombre: ${this.nombre}</p>
        <p>Edad: ${this.edad}</p>
      </li>
    `

    this.insertAdjacentHTML("beforeend", html)
  }
}

customElements.define("user-card", UserCard)

// ----------------------------------------------------------------------

const listaDeUsuarios = document.getElementById("lista-de-usuarios")

async function obtenerUsuarios() {
  const res = await fetch("http://localhost:3000/usuarios")
  const datos = await res.json()

  return datos
}

obtenerUsuarios()
  .then((usuarios) => {

    usuarios.forEach((usuario) => {
      const itemDeUsuario = document.createElement("li")
      itemDeUsuario.innerHTML = `<user-card nombre="${usuario.nombre}" edad="${usuario.edad}"/>`

      listaDeUsuarios.appendChild(itemDeUsuario)
    })

  })
