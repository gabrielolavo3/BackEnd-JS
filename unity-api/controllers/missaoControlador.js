import Missao from "../models/Missao";

export async function criarMissao (req, res) {
    const { nomeMissao, estadoConclusao } = req.body;

    try {
        const novaMissao = new Missao({ nomeMissao, estadoConclusao });
        await novaMissao.save();
        res.status(201).json({ mensagem: 'Missão criada com sucesso!', missao: novaMissao });
        
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao criar missão.', erro });
    }
}

export async function listarMissoes(req, res) {
    try {
        const missoes = await Missao.find();
        res.status(200).json(missoes);

    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar missões.', erro });
    }
}

export async function atualizarEstadoMissao(req, res) {
  const { nomeMissao } = req.params;
  const { novoEstado } = req.body;

  // Validação do enum
  const estadosValidos = ['NÃO INICIADO', 'EM ANDAMENTO', 'CONCLUIDA'];
  if (!estadosValidos.includes(novoEstado)) {
    return res.status(400).json({ mensagem: 'Estado de conclusão inválido.' });
  }

  try {
    const missao = await Missao.findOneAndUpdate(
      { nomeMissao },
      { estadoConclusao: novoEstado },
      { new: true }
    );

    if (!missao) {
      return res.status(404).json({ mensagem: 'Missão não encontrada.' })
    }

    res.status(200).json({ mensagem: 'Estado de missão atualizado com sucesso!', missao })

  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar estado da missão.', erro })
  }
};