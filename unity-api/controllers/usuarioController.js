import Usuario from '../models/Usuario.js';
import Contador from '../models/Contador.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function gerarProximoId(nome) {
  const resultado = await Contador.findByIdAndUpdate(
    nome,
    { $inc: { sequencia: 1 } },
    { new: true, upsert: true }
  );
  return resultado.sequencia;
}

export async function cadastrarUsuario(req, res) {
  const { email, senha } = req.body;
  
  try {
    const usuarioExistente = await Usuario.findOne({ email });
    
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Email já cadastrado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const idUsuario = await gerarProximoId('idUsuario');

    const novoUsuario = new Usuario({ idUsuario, email, senha: senhaCriptografada });
    await novoUsuario.save();
    
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário.', erro: erro.message });
  }
}

export async function loginUsuario(req, res) {
  const { email, senha } = req.body;
  
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }        

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: 'Senha incorreta.' });
    }

    const token = jwt.sign({ idUsuario: usuario.idUsuario }, 'segredoJWT', { expiresIn: '24h' });

    res.status(200).json({ token, idUsuario: usuario.idUsuario });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao fazer login.', erro });
  }
}
