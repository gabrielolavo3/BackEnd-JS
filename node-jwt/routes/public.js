import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.post('/cadastro',async (request, response) => {
    try {        
        const user = request.body 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data:{
                email: user.email,
                name: user.name,
                password: hashPassword
            }
        })
        
        response.status(201).json(userDB)
    } catch(error) {
        response.status(500).json({ message: 'Erro ao cadastrar usuário' })
    }
})

export default router