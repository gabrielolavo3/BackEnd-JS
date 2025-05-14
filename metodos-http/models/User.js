import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        requerid: true,
    },
    age:{
        type: Number,
        requerid: true
    },
    createdAt:{ // Data de criação automática do usuário
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("User", userSchema) // Exporta o modelo User para ser utilizado em outros arquivos