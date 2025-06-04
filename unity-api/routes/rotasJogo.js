import express from 'express';
import { criarDadosJogo, atualizarDadosJogo, buscarDadosPorUsuario } from '../controllers/dadoJogoController.js';

const router = express.Router();

router.post('/criar', criarDadosJogo);
router.put('/atualizar', atualizarDadosJogo);
router.get('/dados/:idUsuario', buscarDadosPorUsuario);

export default router;
