# FindPreviousOrNextTag

<br>

## Aplicação

<br>

Esse script tem por intenção ajudar no trabalho com __Web Tracking__ (especialmente com o <a href="https://tagmanager.google.com">Google Tag Manager</a>), quando você está diante de grupos de elementos repetidos todos dentro de uma tag mãe, que pode ser uma `<div>` ou uma `<section>`, por exemplo.

Você não pode usar os métodos JavaScript `parentNode` nem `parentElement`, pois as tags são irmãs: elas estão todas dentro da mesma tag mãe.

---

<br><br>

### 1) Quando não usar

<br>

_Os elementos estão claramente agrupados; eles estão envoltos por diferentes tags mãe, que permitem que um método_ `querySelector` _faça o trabalho_.

__Exemplo__ - cada grupo está envolto em uma `<div>`: você tem que acessar o conteúdo da `<h1>` mais próxima a partir de um clique em uma das tags `<a>`:

```html
<div>
  <h1>Título 1</h1>
  <p><a href="#">Clique aqui 1</a></p>
</div>
<div>
  <h1>Título 2</h1>
  <p><a href="#">Clique aqui 2</a></p>
</div>
<div>
  <h1>Título 3</h1>
  <p><a href="#">Clique aqui 3</a></p>
</div>
```

Você quer que sua tag diga ao usuário "_esse clique está sob esse título_" (o conteúdo da `<h1>` mais próxima para cima). Desse modo, um clique em `Clique aqui 1` estaria relacionado ao `Título 1`, um clique em `Clique aqui 2` ao `Título 2`, e assim por diante.

<br>

O código abaixo é uma variável JavaScript personalizada do <a href="https://tagmanager.google.com">Google Tag Manager</a> que faz o trabalho descrito acima: ela irá correlacionar um clique em uma `<a>` com o conteúdo da `<h1>`dentro da mesma `<div>`:

<br>

Conteúdo de `minhaVariavel`:

```javascript
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h1').innerText;
}
```

_O caminho a seguir está claro aqui_: você tem apenas que subir dois elementos e usar o método `querySelector`: o primeiro `parentNode` apontará para a tag `<p>`; o segundo `parentNode` apontará para a tag `<div>` e então o `querySelector('h1')` apontará para a primeira tag `<h1>`.

<br>

`{{minhaVariavel}}` é a forma para acessar outras variáveis, seja a partir de outra variável JavaScript personalizada ou de uma tag HTML personalizada, ou para usar sua saída como valor de algum parâmetro em uma tag.

Existe um conjunto de variáveis nativas disponíveis. `{{Click Element}}` é uma das variáveis nativas mais úteis do <a href="https://tagmanager.google.com">Google Tag Manager</a>. Ela retorna a __tag HTML__ clicada (ou tocada), permitindo sua manipulação e navegação através de suas irmãs, filhas e mães, como fazem as __funções__ desse projeto.

---

<br><br>

### 2) Quando usar

<br>

_Os elementos não estão claramente agrupados, pois estão envoltos por uma única tag mãe._

__Exemplo__ - os grupos estão todos dentro de uma tag mãe (`<div>`):

```html
<div>
  <h1>Título 1</h1>
  <p><a href="#">Clique aqui 1</a></p>
  <h1>Título 2</h1>
  <p><a href="#">Clique aqui 2</a></p>
  <h1>Título 3</h1>
  <p><a href="#">Clique aqui 3</a></p>
</div>
```

Você precisa referenciar o valor de uma `<h1>` a partir de um clique em uma das `<a>`, mas, se você usar o método descrito em 1), você sempre irá obter o valor da primeira `<h1>`.

<br>

Você precisa que um clique em `Clique aqui 1` retorne `Título 1`; que um clique em `Clique aqui 2` retorne `Título 2`, e assim por diante.

Mas, nesse caso, aplicar o método `querySelector`na `<div>` mãe não iria funcionar: ele sempre retornaria `Título 1`, pois existe uma única `<div>` mãe envolvendo todas os pares `<h1>` / `<p>`.

Você quer a `<h1>` irmã mais próxima para cima, nesse caso.

<br>

E aí que esse projeto torna-se útil: você precisa navegar pelas tags irmãs, o que significa que você não quer acessar a tag mãe da tag, mas que você quer averiguar suas irmãs mais próximas, tanto acima quando abaixo, e, somente então, subir um nível acima, caso a tag com o nome especificado não esteja presente.

---

<br><br>

## Descrição de função

<br>

### 1) `getOrderedSiblingTags( tagElement, s = 'both')`

<br>

Essa é a função base, e é chamada pelas funções 2) a 5), direta ou indiretamente, e _não_ foi feita para ser usada por si só.

<br>

Ela recebe como primeiro argumento uma __tag HTML__, e, como seu segundo argumento opcional um parâmetro: `'previous'`, `'next'` ou `'both'` (anterior, próximo, ambos)  (_'both'_ é o valor padrão).

`getOrderedSiblingTags` retorna um objeto que contém a __tag HTML__ recebida como argumento e todas as suas irmãs divididas em dois arrays, `'previous'` e `'next'`. Ela também pode retornar duas funções (quando o parâmetro `'both'` é recebido), `toArray` e `tagPosition`, que retornam todas as tags irmãs na forma de um array e a posição da __tag HTML__ recebida como argumento nesse array, respectivamente.

<br>

#### Descrição das propriedads do objeto retornado pela função `getOrderedSiblingTags`

```javascript
{
  tag:         "(OBRIGATÓRIO) a tag HTML recebida como argumento",
  siblings: {
    next:      "[ ...next ] || []",
    previous:  "[ ...previous ] || []"
  },
  toArray:     "[ ...previous, tag, ...next ] || [ tag ] || [ ...previous, tag ] || [ tag, ...next ]",
  tagPosition: "number (previous.length)"
}
```

- `tag`: contém a tag recebida como argumento por `getOrderedSiblingTags`;
- `siblings.next`: se `'both'` ou `'next'` for passado como segundo argumento, ela conterá todas as tags depois da __tag HTML__ recebida como primeiro argumento, como um array;
- `siblings.previous`: se `'both'` ou `'previous'` for passado como segundo argumento, ela conterá todas as tags antes da __tag HTML__ recebida como primeiro argumento, como um array;
- `toArray`: se `'both'` for passado como segundo argumento, essa __função__ ficará disponível e irá retornar todas as tags irmãs como um array; a __tag HTML__ recebida como primeiro argumento estará na posição correta dentro do array;
- `tagPosition`: se `'both'` for passado como segundo argumento, essa __função__ ficará disponível e irá retornar a posição da tag em `toArray`, permitindo que você a acesse facilmente.

---

<br>

### 2) `findFirstPreviousSiblingTag`

<br>



---

<br>

### 3) `findFirstPreviousTag`

<br>



---

<br>

### 4) `findFirstNextSiblingTag`

<br>



---

<br>

### 5) `findFirstNextTag`

<br>
