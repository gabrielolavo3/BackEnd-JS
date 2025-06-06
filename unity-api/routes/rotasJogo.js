import express from 'express';
import { upsertDadosJogo, buscarDadosJogo } from '../controllers/dadoJogoController.js';

const router = express.Router();

router.post('/criar_atualizar', upsertDadosJogo);
router.get('/dados/:nome', buscarDadosJogo);

export default router;
