
import express from "express"; //importou o express

import dotenv from "dotenv"; //importou o dotenv

dotenv.config() //configuração simples do dotenv

import './connection'

const PORT = process.env.PORT || 8080 //peguei a port do arquivo .env

const app = express() //pego o expess

app.get('/', (request, response) => { //defino uma rota (barra /)
  response.send("Server up KLAUS-")
})

app.listen(PORT, () => { //subo o servidor, escutando a porta que é 8090
  console.log(`server running in port ${PORT}`) //passo um log pra avisar que o servidor está UP
})
