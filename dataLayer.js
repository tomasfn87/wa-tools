(() => {
  let c = 0;
  for (i in dataLayer) {
    if (dataLayer[i].event && dataLayer[i].event.substring(0, 9) == 'view_item') {
      c++;
      p = dataLayer[i].ecommerce.items[dataLayer[i].ecommerce.items.length - 1].item_name;
      if (dataLayer[i].event == 'view_item') {
        tipo = 'Página de produto visualizada'
      } else {
        tipo = 'Item de lista de produtos visualizado'
      }
      console.log(c.toString().padStart(2, '0') + ' - ' + tipo + ': ' + p);
    }
  }
})()

let dataLayer = [];
dataLayer.push({ event: 'view_item_list', ecommerce: { items: [{ item_name: 'Teste 1' }] } });
dataLayer.push({ event: 'view_item', ecommerce: { items: [{ item_name: 'Teste 2' }] } });