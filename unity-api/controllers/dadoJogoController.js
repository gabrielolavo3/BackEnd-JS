import DadoJogo from '../models/DadoJogo.js'

// post
export async function criarDadosJogo(req, res) {
  const { idUsuario, 
    nomeJogo, 
    descricao, 
    dificuldadeTrabalhada, 
    estrelas, 
    progresso, 
    pontuacaoTotal, 
    tempoJogado, 
    dadosEspecificos 
  } = req.body

  try {
    const usuarioId = Number(idUsuario);
    const dadosExistentes = await DadoJogo.findOne({ idUsuario: usuarioId, nomeJogo })

    if (dadosExistentes) {
      return res.status(409).json({ mensagem: 'Dados do jogo já existem.' })
    }

    const novoDado = new DadoJogo({
      idUsuario: usuarioId,
      nomeJogo,
      descricao,
      dificuldadeTrabalhada,
      estrelas,
      progresso,
      pontuacaoTotal,
      tempoJogado,
      dadosEspecificos
    })

    await novoDado.save();

    res.status(201).json({ mensagem: 'Dados criados com sucesso!' });

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao criar dados do jogo.', erro })
  }
}

// put
export async function atualizarDadosJogo(req, res) {
  const { idUsuario, 
    nomeJogo,
    estrelas, 
    progresso, 
    pontuacaoTotal, 
    tempoJogado, 
    dadosEspecificos 
  } = req.body

  try {
    const usuarioId = Number(idUsuario);
    const dadosExistentes = await DadoJogo.findOne({ idUsuario: usuarioId, nomeJogo })

    if (!dadosExistentes) {
      return res.status(404).json({ mensagem: 'Dados do jogo não encontrados para atualização.' })
    }

    dadosExistentes.estrelas = estrelas
    dadosExistentes.progresso = progresso
    dadosExistentes.pontuacaoTotal = pontuacaoTotal
    dadosExistentes.tempoJogado = tempoJogado
    dadosExistentes.dadosEspecificos = dadosEspecificos

    await dadosExistentes.save();

    res.status(200).json({ mensagem: 'Dados atualizados com sucesso!' });

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar dados do jogo.', erro });
  }
}

// get
export async function buscarDadosPorUsuario(req, res) {
  const { idUsuario } = req.params;
  
  try {
    const dados = await DadoJogo.find({ idUsuario: Number(idUsuario) })
    res.status(200).json(dados);

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar dados do jogo.', erro })
  }
}
