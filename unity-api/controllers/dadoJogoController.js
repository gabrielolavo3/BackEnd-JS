import DadoJogo from '../models/DadoJogo.js';

export async function salvarOuAtualizarDadosJogo(req, res) {
  const { idUsuario, nomeJogo, descricao,                   
      dificuldadeTrabalhada,
      finalidade,
      estrelas,
      progresso,
      pontuacaoTotal,
      tempoJogado,
      dadosEspecificos
    } = req.body;

  try {
    const dadosExistentes = await DadoJogo.findOne({ idUsuario, nomeJogo });

    if (dadosExistentes) {
      dadosExistentes.estrelas = estrelas;
      dadosExistentes.progresso = progresso;
      dadosExistentes.pontuacaoTotal = pontuacaoTotal;
      dadosExistentes.tempoJogado = tempoJogado;
      dadosExistentes.dadosEspecificos = dadosEspecificos;
      
      await dadosExistentes.save();
      return res.status(200).json({ mensagem: 'Dados atualizados com sucesso!' });
    }

    const novoDado = new DadoJogo({ 
      idUsuario,  
      nomeJogo,
      descricao,                   
      dificuldadeTrabalhada,       
      finalidade,                   
      estrelas, 
      progresso, 
      pontuacaoTotal, 
      tempoJogado,
      dadosEspecificos
    });

    await novoDado.save();

    res.status(201).json({ mensagem: 'Dados salvos com sucesso!' });

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao salvar dados do jogo.', erro });
  }
}

export async function buscarDadosPorUsuario(req, res) {
  const { idUsuario } = req.params;
  
  try {
    const dados = await DadoJogo.find({ idUsuario: Number(idUsuario) });
    res.status(200).json(dados);

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar dados do jogo.', erro });
  }
}
