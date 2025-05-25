import express from 'express'
import pkg from '@prisma/client'

const { PrismaClient } = pkg

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

const users = []

// Método HTTP Criar
app.post('/usuarios', async (request, response) => {    
    // users.push(request.body)

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    })

    response.status(201).json(request.body)
})

// Método HTTP Listar
app.get('/usuarios', (request, response) => {    
    response.status(200).json(users)
})

app.listen(3000, () => console.log('Servidor executando na porta 3000 🍘'))

// HRVaPncd7rKu4PfJ