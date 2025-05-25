import express from 'express';
import { salvarOuAtualizarDadosJogo, buscarDadosPorUsuario } from '../controllers/dadoJogoController.js';
import autenticacaoJWT from '../middleware/autenticacaoJWT.js';

const router = express.Router();

router.post('/salvar', autenticacaoJWT, salvarOuAtualizarDadosJogo);
router.get('/dados/:idUsuario', autenticacaoJWT, buscarDadosPorUsuario);

export default router;
