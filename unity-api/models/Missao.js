import mongoose from "mongoose";

const MissaoSchema = new mongoose.Schema({
  nomeMissao: { 
    type: String, required: true 
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
  nomeJogo: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Missao = mongoose.model("Missao", MissaoSchema);
export default Missao;