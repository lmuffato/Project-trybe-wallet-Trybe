const validadeLogin = (client) => {
  const CARACTERE_SENHA_MINIMO = 6;
  const caracteresSpecial = !!(client.user.includes('@') && client.user.includes('.'));
  const validadeEmail = !!(caracteresSpecial && client.user.split('.')[1]);
  const validadeSenha = client.password.length >= CARACTERE_SENHA_MINIMO;

  if (validadeSenha && validadeEmail) {
    return false;
  }

  return true;
};

export default validadeLogin;
