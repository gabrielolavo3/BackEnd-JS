import Missao from "../models/Tarefa.js";
import Jogo from "../models/Jogo.js";

export async function upsertMissao(req, res) {
    const { nomeTarefa, descricao, estadoConclusao, nomeJogo } = req.body;

    if (!nomeTarefa || !descricao || !estadoConclusao || !nomeJogo) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Busca o jogo pelo nome
        const jogo = await Jogo.findOne({ nome: { $regex: nomeJogo, $options: 'i' } });


        if (!jogo) {
            return res.status(404).json({ mensagem: 'Jogo não encontrado com o nome informado.' });
        }

        // Verifica se já existe a missão com esse nome e jogo
        const missaoExistente = await Missao.findOne({ nomeTarefa, Jogo: jogo._id });

        let missao;
        if (missaoExistente) {
            // Atualiza missão existente
            missaoExistente.descricao = descricao;
            missaoExistente.estadoConclusao = estadoConclusao;
            missao = await missaoExistente.save();

            return res.status(200).json({ mensagem: 'Missão atualizada com sucesso!', missao });
        } else {
            // Cria nova missão
            const novaMissao = new Missao({
                nomeTarefa,
                descricao,
                estadoConclusao,
                Jogo: jogo._id
            });

            missao = await novaMissao.save();

            return res.status(201).json({ mensagem: 'Missão criada com sucesso!', missao });
        }

    } catch (erro) {
        console.error("Erro no upsertMissao:", erro);
        return res.status(500).json({ mensagem: 'Erro ao processar a missão.', erro });
    }
}

// get
export async function listarMissoesPorJogo(req, res) {
    const { nomeJogo } = req.params;
    
    if (!nomeJogo) {  
    return res.status(400).json({ mensagem: 'Nome do jogo é obrigatório na URL (/tarefasPorJogo/:nomeJogo).' });  
}  

try {  
    // 1. Busca o Jogo pelo nome (case-insensitive)  
    const jogo = await Jogo.findOne({  
        nomeJogo: { $regex: nomeJogo, $options: 'i' }  
    });  

    if (!jogo) {  
        return res.status(404).json({ mensagem: 'Jogo não encontrado.' });  
    }  

    // 2. Busca todas as Tarefas relacionadas ao Jogo encontrado  
    const tarefas = await Tarefa.find({ Jogo: jogo._id })         

    res.status(200).json({  
        sucesso: true,  
        tarefas  
    });  
} catch (erro) {  
    res.status(500).json({  
        sucesso: false,  
        mensagem: 'Erro ao listar tarefas pelo nome do jogo.',  
        erro: erro.message  
    });  
}  

}