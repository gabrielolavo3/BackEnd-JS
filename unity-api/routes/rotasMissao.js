import express from 'express'
import { criarMissao, listarMissoesPorJogo, atualizarEstadoMissao } from '../controllers/missaoControlador.js'

const router = express.Router();

router.post('/criarMissao', criarMissao);
router.get('/listarMissoes/:nomeJogo', listarMissoesPorJogo);
router.put('/atualizarMissao/:nomeMissao', atualizarEstadoMissao);

export default router;