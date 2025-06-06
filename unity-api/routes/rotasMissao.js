import express from 'express'
import { upsertMissao, listarMissoesPorJogo } from '../controllers/tarefaControlador.js'

const router = express.Router();

router.post('/criar_atualizar', upsertMissao);
router.get('/listarMissoes/:nomeJogo', listarMissoesPorJogo);

export default router;