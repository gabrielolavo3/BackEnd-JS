import mongoose from 'mongoose';

const dadoJogoSchema = new mongoose.Schema({
  idUsuario: { 
    type: Number, 
    required: true 
},
  nomeJogo: { 
    type: String, 
    required: true 
},
  descricao: { 
    type: String 
},                   
  dificuldadeTrabalhada: { 
    type: String 
},       
  finalidade: { 
    type: String 
},
  estrelas: { 
    type: Number, 
    required: true 
},
  progresso: { 
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
}, { timestamps: true });

const DadoJogo = mongoose.model('DadoJogo', dadoJogoSchema);
export default DadoJogo;