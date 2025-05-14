import express from 'express';
import connectDatabse from './database/db.js';
import routes from './routes.js';

const app = express();
app.use(express.json())
app.use(routes)

connectDatabse()
    .then(() => {
        app.listen(3000, ()=>{
            console.log("Servidor rodando na porta 3000 e conectado ao MongoDB 🍃")
        })
    })
    .catch((error)=> { console.log("Erro ao conectar ao MongoDB: " + error) })