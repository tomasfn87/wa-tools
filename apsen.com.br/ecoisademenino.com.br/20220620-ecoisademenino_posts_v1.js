(() => {
  let posts = Array.from(document.querySelectorAll('.container.container-cus .row .col-md-4')).slice(0, 12)
  let label = ''

  posts.forEach(p => {
    p.addEventListener('click', e => {
      item_text = p.childNodes[2].childNodes[0].childNodes[3].innerText;

      switch (e.target.localName) {
        case 'img':
          label = 'Imagem - '; break;
        case 'h3':
          label = 'Título - '; break;
        case 'p':
          label = 'Texto - '; break;
        case 'a':
          label = 'Botão - '; break;
      }

      return label + item_text;
    })
  })
}
)();