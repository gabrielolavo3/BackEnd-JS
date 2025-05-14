import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js'; // Importa o modelo User

const app = express();

app.use(express.json()) // Informa ao express que o corpo da requisição será em JSON

const users = []

app.get("/users", async (resquest, response) => {
    const users = await User.find() // Busca todos os usuários no banco de dados

    return response.status(200).json(users)
    // return response.json({ message: "Hello World" })
})

app.post("/users", async (resquest, response) => {
    // const name = resquest.body.name
    // const age = resquest.body.age
    // console.log(resquest)

    const user = resquest.body // Desestruturação do objeto
    
    const newUser = await User.create(user) // Cria um novo usuário no banco de dados

    return response.status(201).json(newUser)
    // users.push({ name, age, nickName }) // Adiciona os dados ao array de usuários
})

mongoose.connect("mongodb+srv://backdev:hUtCljToYJtNxyH4@nodejsbd.47qqnn4.mongodb.net/?retryWrites=true&w=majority&appName=NodeJsbd")
    .then(() => {
        console.log("Conectado ao MongoDB🍃")
    })
    .catch(() => {
        console.log("Erro ao conectar ao MongoDB")
    })

app.listen(3000) // Execução do servidor na porta 3000

// GET: Busca de informações
// POST: Criação de informações
// PUT/PATCH: Atualização de informações
// DELETE: Deleção de informações