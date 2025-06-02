import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDatabase from './database/conexaoBanco.js';
import rotasUsuario from './routes/rotasUsuario.js';
import rotasJogo from './routes/rotasJogo.js';
import rotasMissao from './routes/rotasMissao.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/usuario', rotasUsuario);
app.use('/api/jogo', rotasJogo);
app.use('/api/missao', rotasMissao);

connectDatabase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT} e conectado ao MongoDB 🍚`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
