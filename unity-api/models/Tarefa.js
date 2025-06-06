import mongoose from "mongoose";

const TarefaSchema = new mongoose.Schema({
    nomeTarefa: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    estadoConclusao: {
        type: String,
        enum: ['NÃO INICIADO', 'EM ANDAMENTO', 'CONCLUIDA'],
        default: 'NÃO INICIADO'
    },
    Jogo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogo',
        required: true
    }
})


const Tarefa = mongoose.model("Tarefa", TarefaSchema);
export default Tarefa;