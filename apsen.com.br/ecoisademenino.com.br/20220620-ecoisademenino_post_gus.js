<script>
  (function() {
    var posts = Array.from(document.querySelectorAll('.container.container-cus .row .col-md-4')).slice(0,12);
    var label = '';
    posts.forEach(function(p) {
      p.addEventListener('click', function (e) {
        item_text = p.childNodes[2].childNodes[0].childNodes[3].innerText;
        switch (e.srcElement.localName) {
          case 'img':
            label += 'Imagem - '; break;
          case 'h3':
            label += 'Título - '; break;
          case 'p':
            label += 'Texto - '; break;
          case 'a':
            label += 'Botão - '; break;
        }
        dataLayer.push({
          'event': 'click_blog',
          'rotulo_blog': label + item_text
        })
      })
    })
  })();
</script>