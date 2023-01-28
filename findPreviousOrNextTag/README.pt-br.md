# findPreviousOrNextTag

<br>

## Baixar apenas esse projeto de [`wa-tools`](https://github.com/tomasfn87/wa-tools)

<br>

### Usando CLI `git`

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./findPreviousOrNextTag && cd findPreviousOrNextTag && git sparse-checkout set findPreviousOrNextTag && git checkout && mv findPreviousOrNextTag/* . && rm -rf {findPreviousOrNextTag,.git}
```

---

<br>

### Usando um navegador (_browser_)

1. Va até [Download GitHub Directory](https://download-directory.github.io)
2. Cole a URL abaixo no campo de entrada e aperter `Enter` para baixar apenas essa pasta ao invés de todo o repositório `wa-tools`:

```uri
https://github.com/tomasfn87/wa-tools/tree/main/findPreviousOrNextTag
```

---

<br>

## Aplicação

<br>

Esse conjunto de funções tem por intenção ajudar com __Web Tracking__ (_especialmente com o_ [Google Tag Manager](https://tagmanager.google.com)), quando você está diante de grupos de elementos repetidos todos dentro de uma tag mãe, que pode ser uma `<div>` ou uma `<section>`, por exemplo.

Você não pode usar os métodos JavaScript `parentNode` nem `parentElement`, pois as tags são irmãs: elas estão todas dentro da mesma tag mãe.

---

<br><br>

### 1) Quando não usar

<br>

*__Os elementos estão claramente agrupados; eles estão envoltos por diferentes tags mãe, que permitem que um método__* `querySelector` *__faça o trabalho.__*

__Exemplo__ - cada grupo está envolto em uma `<div>`: você tem que acessar o conteúdo da `<h3>` mais próxima a partir de um clique em uma das tags `<a>`:

```html
<div>
  <h3>Título 1</h3>
  <p><a href="#">Clique aqui 1</a></p>
</div>
<div>
  <h3>Título 2</h3>
  <p><a href="#">Clique aqui 2</a></p>
</div>
<div>
  <h3>Título 3</h3>
  <p><a href="#">Clique aqui 3</a></p>
</div>
```

Você quer que sua tag diga ao usuário __"esse clique está sob esse título"__ (_o conteúdo da_ `<h3>` _mais próxima, para cima_). Desse modo, um clique em `Clique aqui 1` estaria relacionado ao `Título 1`, um clique em `Clique aqui 2` ao `Título 2`, e assim por diante.

<br>

O código abaixo é uma variável JavaScript personalizada do [Google Tag Manager](https://tagmanager.google.com) que faz o trabalho descrito acima: ela irá correlacionar um clique em uma `<a>` com o conteúdo da `<h3>` dentro da mesma `<div>`:

<br>

Conteúdo de `minhaVariavel`:

```javascript
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h3').innerText;
}
```

*__O caminho a seguir está claro aqui__*: você tem apenas que subir dois elementos e usar o método `querySelector`: o primeiro `parentNode` apontará para a tag `<p>`; o segundo `parentNode` apontará para a tag `<div>` e então o `querySelector('h3')` apontará para a primeira tag `<h3>`.

<br>

`{{minhaVariavel}}` - é dessa forma que se acessam outras variáveis no [Google Tag Manager](https://tagmanager.google.com), seja a partir de outra variável JavaScript personalizada ou de uma tag HTML personalizada, ou para usar sua saída como valor de algum parâmetro em uma tag.

Existe um conjunto de variáveis nativas disponíveis. `{{Click Element}}` é uma das variáveis nativas mais úteis do [Google Tag Manager](https://tagmanager.google.com). Ela retorna a __tag HTML__ clicada (_ou tocada_), permitindo sua manipulação e navegação através de suas irmãs, filhas e mães, como o fazem as __funções__ desse projeto.

---

<br><br>

### 2) Quando usar

<br>

*__Os elementos não estão claramente agrupados, pois estão envoltos por uma única tag mãe.__*

__Exemplo__ - os grupos estão todos dentro de uma tag mãe (`<div>`):

```html
<div>
  <h3>Título 1</h3>
  <p><a href="#">Clique aqui 1</a></p>
  <h3>Título 2</h3>
  <p><a href="#">Clique aqui 2</a></p>
  <h3>Título 3</h3>
  <p><a href="#">Clique aqui 3</a></p>
</div>
```

Você precisa referenciar o valor de uma `<h3>` a partir de um clique em uma das `<a>`, mas, se você usar o método descrito em 1), você sempre irá obter o valor da primeira `<h1>`.

<br>

Você precisa que um clique em `Clique aqui 1` retorne `Título 1`; que um clique em `Clique aqui 2` retorne `Título 2`, e assim por diante.

Mas, nesse caso, aplicar o método `querySelector`na `<div>` mãe não iria funcionar: ele sempre retornaria `Título 1`, pois existe uma única `<div>` mãe envolvendo todas os pares `<h3>`/`<p>`.

Você quer a `<h3>` irmã mais próxima para cima, nesse caso.

<br>

E aí que esse projeto torna-se útil: você precisa navegar pelas tags irmãs, o que significa que você não quer acessar a tag mãe da tag, mas que você quer averiguar suas irmãs mais próximas, tanto acima quando abaixo, e, somente então, subir um nível acima, caso a tag com o nome especificado não esteja presente.

---

<br><br>

## Descrição de função

<br>

### 1) [`getOrderedSiblingTags( tagElement, s = 'both')`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/getOrderedSiblingTags.js)

<br>

Essa é a função base, e é chamada pelas funções 2) a 9), direta ou indiretamente, e _não_ foi feita para ser usada por si só.

<br>

Ela recebe como primeiro argumento uma __tag HTML__, e, como seu segundo argumento opcional um parâmetro: `'previous'`, `'next'` ou `'both'` (_anterior, próximo, ambos;_ `'both'` _é o valor padrão_).

`getOrderedSiblingTags` retorna um objeto que contém a __tag HTML__ recebida como argumento e todas as suas irmãs divididas em dois arrays, `'previous'` e `'next'`. Ela também pode retornar duas funções (_quando o parâmetro_ `'both'` _é recebido_), `toArray` e `tagPosition`, que retornam todas as tags irmãs na forma de um array e a posição da __tag HTML__ recebida como argumento nesse array, respectivamente.

<br>

#### Descrição das propriedads do objeto retornado pela função `getOrderedSiblingTags`

```javascript
{
    tag:             htmlTag, // a tag HTML recebida como primeiro argumento;
    siblings: {
        next:        [ ...next ] || [],    // as tags irmãs depois de 'tag';
        previous:    [ ...previous ] || [] // as tags irmãs antes de 'tag';
    },
    toArray() =>     [ ...previous, tag, ...next ] || [ tag ]
                         || [ ...previous, tag ] || [ tag, ...next ],
    // essa função retorna todas as tags irmãs, em ordem, incluindo 'tag';
    tagPosition() => number // essa função retorna a posição de 'tag' em 'toArray()'.
}
```

- `tag`: a tag recebida como primeiro argumento por `getOrderedSiblingTags`;
- `siblings.next`: se `'both'` ou `'next'` for passado como segundo argumento, ela conterá todas as tags depois da __tag HTML__ recebida como primeiro argumento, como um array;
- `siblings.previous`: se `'both'` ou `'previous'` for passado como segundo argumento, ela conterá todas as tags antes da __tag HTML__ recebida como primeiro argumento, como um array;
- `toArray()`: se `'both'` for passado como segundo argumento, essa __função__ ficará disponível e irá retornar todas as tags irmãs como um array; a __tag HTML__ recebida como primeiro argumento estará na posição correta dentro do array;
- `tagPosition()`: se `'both'` for passado como segundo argumento, essa __função__ ficará disponível e irá retornar a posição da tag em `toArray()`, permitindo que você a acesse facilmente.

---

<br>

### 2) [`findFirstPreviousSiblingTag( tagElement, tagName )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js)

<br>

`findFirstPreviousSiblingTag` chama `getOrderedSiblingTags` com `'previous'` como segundo argumento para tentar encontrar a primeira das tags irmãs anteriores que bater com o nome passado para `tagName`.

<br>

`findFirstPreviousSiblingTag` recebe dois argumentos:

- `tagElement`: a __tag HTML__ que será o ponto de partida da busca;
- `tagName`: o nome da tag que deve ser encontrada entre as tag irmãs anteriores.

<br>

`findFirstPreviousSiblingTag` retorna:

- uma __tag HTML__ com o mesmo nome que `tagName`;
- `null`, caso uma tag correspondente não seja encontrada.

---

<br>

### 3) [`findFirstPreviousTag( tagElement, tagName, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js)

<br>

`findFirstPreviousTag` chama `findFirstPreviousSiblingTag` diversas vezes para ampliar a busca chamando o método `parentNode` para que a busca também procure nas tags irmãs anteriores da tag mãe de `tagElement`.

<br>

`findFirstPreviousSiblingTag` recebe três argumentos:

- `tagElement`: a __tag HTML__ que será o ponto de partida da busca;
- `tagName`: o nome da __tag HTML__ que deve ser encontrada entre as tag irmãs anteriores;
- `levelsUp`: um número que indica quantos níveis acima a busca poderá alcançar (_ou quantas vezes o método_ `parentNode` _pode ser chamado_).

<br>

`findFirstPreviousTag` retorna:

- uma __tag HTML__ com o mesmo nome que `tagName`;
- `null`, caso uma tag correspondente não seja encontrada.

---

<br>

### 4) [`findFirstNextSiblingTag( tagElement, tagName )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js)

<br>

`findFirstNextSiblingTag` chama `getOrderedSiblingTags` com `'next'` como segundo argumento para tentar encontrar a primeira das tags irmãs seguintes que bater com o nome passado para `tagName`.

<br>

`findFirstNextSiblingTag` recebe dois argumentos:

- `tagElement`: a __tag HTML__ que será o ponto de partida da busca;
- `tagName`: o nome da tag que deve ser encontrada entre as tag irmãs seguintes.

<br>

`findFirstNextSiblingTag` retorna:

- uma __tag HTML__ com o mesmo nome que `tagName`;
- `null`, caso uma tag correspondente não seja encontrada.

---

<br>

### 5) [`findFirstNextTag( tagElement, tagName, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js)

<br>

`findFirstNextTag` chama `findFirstNextSiblingTag` diversas vezes para ampliar a busca chamando o método `parentNode` para que a busca também procure nas tags irmãs posteriores à tag mãe de `tagElement`.

<br>

`findFirstNextTag` recebe três argumentos:

- `tagElement`: a __tag HTML__ que será o ponto de partida da busca;
- `tagName`: o nome da __tag HTML__ que deve ser encontrada entre as tag irmãs seguintes;
- `levelsUp`: um número que indica quantos níveis acima a busca poderá alcançar (_ou quantas vezes o método_ `parentNode` _pode ser chamado_).

<br>

`findFirstNextTag` retorna

- uma __tag HTML__ com o mesmo nome que `tagName`;
- `null`, caso uma tag correspondente não seja encontrada.

---

<br><br>

## Requisitar tags usando seletores CSS ao invés de nomes de tags

<br>

As funções `findFirstPreviousTagByCssSelector`, `findFirstPreviousSiblingTagByCssSelector`, `findFirstNextTagByCssSelector` e `findFirstNextSiblingTagByCssSelector` funcionam da mesma maneira que `findFirstPreviousTag`, `findFirstPreviousSiblingTag`, `findFirstNextTag` e `findFirstNextSiblingTag`, respectivamente, mas elas permitem o uso de seletores CSS ao invés de nomes de tags, possibilitando que identifiquem o que quer que seja possível escrever em um seletor CSS:

<br>

### 6) [`findFirstPreviousSiblingTagByCssSelector( tagElement, cssSelector )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js)

<br>

---

<br>

### 7) [`findFirstPreviousTagByCssSelector( tagElement, cssSelector, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js)

<br>

---

<br>

### 8) [`findFirstNextSiblingTagByCssSelector( tagElement, cssSelector )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js)

<br>

---

<br>

### 9) [`findFirstNextTagByCssSelector( tagElement, cssSelector, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js)
