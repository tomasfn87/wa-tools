# findPreviousOrNextTag

<br>

## Aplicação

<br>

Esse script tem por intenção ajudar no trabalho com <b>Web Tracking</b> (especialmente com o <a href="https://tagmanager.google.com">Google Tag Manager</a>), quando você está diante de grupos de elementos repetidos todos dentro de uma tag mãe, que pode ser uma ```<div>``` ou uma ```<section>```, por exemplo.

Você não pode usar os métodos JavaScript ```parentNode``` nem ```parentElement```, pois as tags são irmãs: elas estão todas dentro da mesma tag mãe.

---

<br><br>

### 1) Quando não usar

<br>

<i>Os elementos estão claramente agrupados; eles estão envoltos por diferentes tags mãe, que permitem que um método</i> ```querySelector``` <i>faça o trabalho</i>.

<b>Exemplo</b> - cada grupo está envolto em uma ```<div>```: você tem que acessar o conteúdo da ```<h1>``` mais próxima a partir de um clique em uma das tags ```<a>```:

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

Você quer que sua tag diga ao usuário "<i>esse clique está sob esse título</i>" (o conteúdo da ```<h1>``` mais próxima para cima). Desse modo, um clique em ```Clique aqui 1``` estaria relacionado ao ```Título 1```, um clique em ```Clique aqui 2``` ao ```Título 2```, e assim por diante.

<br>

O código abaixo é uma variável JavaScript personalizada do <a href="https://tagmanager.google.com">Google Tag Manager</a> que faz o trabalho descrito acima: ela irá correlacionar um clique em uma ```<a>``` com o conteúdo da ```<h1>```dentro da mesma ```<div>```:


<br>

Conteúdo de ```minhaVariavel```:
```
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h1').innerText;
}
```

<i>O caminho a seguir está claro aqui</i>: você tem apenas que subir dois elementos e usar o método ```querySelector```: o primeiro ```parentNode``` apontará para a tag ```<p>```; o segundo ```parentNode``` apontará para a tag ```<div>``` e então o ```querySelector('h1')``` apontará para a primeira tag ```<h1>```.

<br>

```{{minhaVariavel}}``` é a forma para acessá-la a partir de outra variável JavaScript personalizada ou de uma tag HTML personalizada, ou para usar sua saída como valor de algum parâmetro em uma tag.

```{{Click Element}}``` é uma das variáveis padrão mais úteis do <a href="https://tagmanager.google.com">Google Tag Manager</a>. Ela retorna a <b>tag HTML</b> clicada (ou tocada), permitindo sua manipulação e navegação através de suas irmãs, filhas e mães, como fazem as <b>funções</b> desse projeto.

---

<br><br>

### 2) Quando usar

<br>

<i>Os elementos não estão claramente agrupados, pois estão envoltos por uma única tag mãe.</i>

<b>Exemplo</b> - os grupos estão todos dentro de uma tag mãe (```<div>```):

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

Você precisa referenciar o valor de uma ```<h1>``` a partir de um clique em uma das ```<a>```, mas, se você usar o método descrito em 1), você sempre irá obter o valor da primeira ```<h1>```.

<br>

Você precisa que um clique em ```Clique aqui 1``` retorne ```Título 1```; que um clique em ```Clique aqui 2``` retorne ```Título 2```, e assim por diante.

Mas, nesse caso, aplicar o método ```querySelector```na ```<div>``` mãe não iria funcionar: ele sempre retornaria ```Título 1```, pois existe uma única ```<div>``` mãe envolvendo todas os pares ```<h1>``` / ```<p>```.

Você quer a ```<h1>``` irmã mais próxima para cima, nesse caso.

<br>

E aí que esse projeto torna-se útil: você precisa navegar pelas tags irmãs, o que significa que você não quer acessar a tag mãe da tag, mas que você quer averiguar suas irmãs mais próximas, tanto acima quando abaixo, e, somente então, subir um nível acima, caso a tag com o nome especificado não esteja presente.

---
<br><br>

# Descrição de função

<br>

## 1) getOrderedSiblingTags( tagElement, s = 'both')

<br>

### Essa é a função base, e é chamada pelas funções 2) a 5), direta ou indiretamente, e <i>não</i> foi feita para ser usada por si só.

<br>

Ela recebe como primeiro argumento uma <b>tag HTML</b>, e, como seu segundo argumento um parâmetro: <b>'previous'</b>, <b>'next'</b> ou <b>'both'</b> (anterior, próximo, ambos).

<b>getOrderedSiblingTags</b> retorna um objeto que contém a <b>tag HTML</b> recebida como argumento e todas as suas irmãs divididas em dois arrays, <b>'previous'</b> e <b>'next'</b>. Ela também pode retornar duas funções (quando o parâmetro <b>'both'</b> é recebido), <b>'toArray'</b> e <b>'tagPosition'</b>, que retornam todas as tags irmãs na forma de um array e a posição da <b>tag HTML</b> recebida como argumento nesse array, respectivamente.

```javascript
{
  tag: "1. (OBRIGATÓRIO) a tag HTML recebida como argumento",
  siblings: {
    next: "2. [ ...next ] || []",
    previous: "3. [ ...previous ] || []"
  },
  toArray: "4. [ ...previous, tag, ...next ] || [ tag ] || [ ...previous, tag ] || [ tag, ...next ]",
  tagPosition: "5. - inteiro (previous.length)"
}
```

```1.``` contém a tag recebida como argumento por <b>getOrderedSiblingTags</b>;<br>
```2.``` se <b>'both'</b> ou <b>'next'</b> for passado como segundo argumento, ela conterá todas as tags depois da <b>tag HTML</b> recebida como primeiro argumento, como um array;<br>
```3.``` se <b>'both'</b> ou <b>'previous'</b> for passado como segundo argumento, ela conterá todas as tags antes da <b>tag HTML</b> recebida como primeiro argumento, como um array;<br>
```4.``` se <b>'both'</b> for passado como segundo argumento, essa <b>função</b> ficará disponível e irá retornar todas as tags irmãs como um array; a <b>tag HTML</b> recebida como primeiro argumento estará na posição correta dentro do array;<br>
```5.``` se <b>'both'</b> for passado como segundo argumento, essa <b>função</b> ficará disponível e irá retornar a posição da tag em 'toArray', permitindo que você a acesse facilmente.<br>

---

<br>

## 2) findFirstPreviousSiblingTag

<br>



---

<br>

## 3) findFirstPreviousTag

<br>



---

<br>

## 4) findFirstNextSiblingTag

<br>



---

<br>

## 5) findFirstNextTag

<br>


