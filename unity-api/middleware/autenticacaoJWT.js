import jwt from 'jsonwebtoken';

function autenticarToken(req, res, next) {
  const cabecalhoAutorizacao = req.headers['authorization'];

  if (!cabecalhoAutorizacao) {
    return res.status(403).json({ mensagem: 'Cabeçalho de autorização não fornecido.' });
  }

  const partes = cabecalhoAutorizacao.split(' ');

  if (partes.length !== 2 || partes[0] !== 'Bearer') {
    return res.status(403).json({ mensagem: 'Formato do token inválido. Use: Bearer <token>' });
  }

  const token = partes[1];

  try {
    const segredoJWT = process.env.JWT_SECRET || 'segredoJWT';
    const dadosDecodificados = jwt.verify(token, segredoJWT);

    req.idUsuario = dadosDecodificados.idUsuario;
    next();
  } catch (erro) {
    return res.status(401).json({ mensagem: 'Token inválido ou expirado.' });
  }
}

export default autenticarToken;