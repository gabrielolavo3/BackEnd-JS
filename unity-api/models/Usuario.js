import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    // idUsuario: { 
    //     type: Number, 
    //     required: true, 
    //     unique: true 
    // },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    senha: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;