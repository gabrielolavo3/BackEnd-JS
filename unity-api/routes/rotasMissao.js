import express from 'express'
import { criarMissao, listarMissoes, atualizarEstadoMissao } from '../controllers/missaoControlador.js'

const router = express.Router();

router.post('/', criarMissao);
router.get('/', listarMissoes);
router.put('/:nomeMissao/estado', atualizarEstadoMissao);

export default router;