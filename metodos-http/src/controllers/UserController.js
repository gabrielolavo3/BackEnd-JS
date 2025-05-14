import User from "../models/User.js"

async function getUsers(resquest, response) {
    const users = await User.find()

    return response.status(200).json(users)    
}

async function createUser(resquest, response) {   
    const user = resquest.body
    const newUser = await User.create(user)

    return response.status(201).json(newUser)
    // users.push({ name, age, nickName }) // Adiciona os dados ao array de usuários
}

async function deleteUser(resquest, response) {
    const id = resquest.params.id

    await User.findByIdAndDelete({_id: id})
    return response.status(200).json({ message: "Usuário deletado com sucesso!" })
}

export { getUsers, createUser, deleteUser }