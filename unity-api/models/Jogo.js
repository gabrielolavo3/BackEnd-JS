import mongoose from 'mongoose';

 const JogoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    dificuldadeTrabalhada: {
        type: String
    },
    estrelas: {
        type: Number,
        required: true
    },    
    pontuacaoTotal: {
        type: Number,
        required: true
    },
    tempoJogado: {
        type: Number,
        required: true
    },
    dadosEspecificos: {
        type: Object
    },
})

const Jogo = mongoose.model('Jogo', JogoSchema);
export default Jogo;