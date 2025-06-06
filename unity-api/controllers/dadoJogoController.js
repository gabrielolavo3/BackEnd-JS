import DadoJogo from '../models/Jogo.js'

export async function upsertDadosJogo(req, res) {
  const {
    nome, 
    descricao, 
    dificuldadeTrabalhada, 
    estrelas, 
    pontuacaoTotal, 
    tempoJogado, 
    dadosEspecificos 
  } = req.body;

  try {
    const dadosExistentes = await DadoJogo.findOne({ nome });

    if (dadosExistentes) {
      // Atualiza campos
      dadosExistentes.descricao = descricao;
      dadosExistentes.dificuldadeTrabalhada = dificuldadeTrabalhada;
      dadosExistentes.estrelas = estrelas;
      dadosExistentes.pontuacaoTotal = pontuacaoTotal;
      dadosExistentes.tempoJogado = tempoJogado;
      dadosExistentes.dadosEspecificos = dadosEspecificos;

      await dadosExistentes.save();

      return res.status(200).json({ mensagem: 'Dados atualizados com sucesso!', dadosExistentes });
    } else {
      const novoDado = new DadoJogo({
        nome,
        descricao,
        dificuldadeTrabalhada,
        estrelas,
        pontuacaoTotal,
        tempoJogado,
        dadosEspecificos
      });

      await novoDado.save();

      return res.status(201).json({ mensagem: 'Dados criados com sucesso!' });
    }
  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro ao processar dados do jogo.', erro });
  }
}

// get
export async function buscarDadosJogo(req, res) {
 const { nome } = req.params;
  
  try {
    const dados = await DadoJogo.findOne({ nome })

    if (!dados) {
      return res.status(404).json({ mensagem: 'Dados do jogo não encontrados.' })
    }

    res.status(200).json(dados);

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar dados do jogo.', erro })
  }
}
