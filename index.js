import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

app.use(cors({
  origin: "*"
}))

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'aplicacion',
  password: "Narcisoesfeliz91!"
})

// REQ = PETICION
// RES = RESPUESTA
app.get("/usuarios", (req, res) => {

  conexion.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.log(err)
    }

    res.json(results)
  })

})

app.get("/publicaciones", (req, res) => {

  conexion.query(`SELECT publicaciones.id AS numero_de_publicacion, publicaciones.title AS titulo, publicaciones.content AS cuerpo_de_la_publi, usuarios.nombre AS autor, usuarios.email AS contacto FROM publicaciones INNER JOIN usuarios ON publicaciones.usuario_id = usuarios.id ORDER BY publicaciones.title ASC;`,
    (err, results) => {
      if (err) {
        console.log(err)
      }

      res.json(results)
    })

})

app.listen(3000, () => { console.log("Ejecutando servidor en puerto 3000") })