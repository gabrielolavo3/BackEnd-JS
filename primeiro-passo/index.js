const express = require('express') // Chamada do módulo express

const server = express() // Criação do servidor

server.get('/chocolate', (request, response) => {
  return response.send('Chocolate é muito bom!') // Resposta para a requisição
}) // Rota que responde com uma mensagem

server.get('/pizza', (request, response) => {
  
  console.log(request.query.usuario)
  return response.send(request.query.usuario) 
  // return response.send('Pizza é muito bom!') 
})

server.listen(3000) // O servidor escuta na porta 3000