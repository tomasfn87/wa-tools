() => { 
  let text = '{{Click Text}}';
  let acao;

  if (text.match(/leia\s+mais/i)) {
        acao = 'Botão';
      } else {
        acao = 'Imagem/Título/Texto';
      }

  return acao;
}