 convertES5JsToGtmScript

<br>

_Converter JavaScript ECMA Script 5 para Script do Google Tag Manager_

<br>

## Índice

- [Instalação](#install)
  - [Projeto](#install-project)
    - [`git` CLI](#install-project-git)
    - [Navegador](#install-project-browser)
  - [Dependências](#install-dependencies)
  - [TypeScript](#install-typescript)
- [Por quê esse script foi criado?](#why)
- [Como converter `JavaScript` para `ES5` e então para `GtmScript`](#how-to)
  - [Passo 1 (converter para `ES5` com `tsc`)](#how-to-step-1)
    - [Exemplo](#how-to-step-1-example)
  - [Passo 2 (formatar para `GtmScript` usando](#how-to-step-2) [esse `script`](https://github.com/tomasfn87/wa-tools/blob/main/convertES5JsToGtmScript/convert_es5_javascript_to_gtmscript.js#L9)
    - [Exemplo](#how-to-step-2-example)

<br>

- `convertES5JsToGtmScript` é uma ferramenta que ajuda a converter __JavaScript__ para __Google Tag Manager Script__ (`gtmscript`).

---

<br>

## <span id="install">Instalação (_baixar o projeto e instalar_ `TypeScript`)</span>

<br>

### <span id="install-project">Projeto</span>

- Para baixar apenas esse projeto de [`wa-tools`](https://github.com/tomasfn87/wa-tools):

### <span id="install-project-git">Usando CLI `git`</span>

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./convertES5JsToGtmScript && cd convertES5JsToGtmScript && git sparse-checkout set convertES5JsToGtmScript && git checkout && mv convertES5JsToGtmScript/* . && rm -rf {convertES5JsToGtmScript,.git}
```

---

### <span id="install-project-browser">Usando um navegador (_browser_)</span>

1. Va até [Download GitHub Directory](https://download-directory.github.io)
2. Cole a URL abaixo no campo de entrada e aperter `Enter` para baixar apenas essa pasta ao invés de todo o repositório `wa-tools`:

```uri
https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript
```

---

<br>

## <span id="install-dependencies">Dependências</span>

<br>

```shell
npm install
```

---

<br>

## <span id="install-typescript">TypeScript</span>

<br>

- Instale as bibliotecas do `TypeScript` globalmente na sua máquina para usar como o seu transpilador (você também pode usar `Babel`):

```shell
sudo npm i -g typescript tsc ts-node
```

<br>

---

<br><br>

## <span id="why">Por quê esse script foi criado?</span>

<br>

Esse script é para ser usado quando um código `JavaScript` de uma versão acima da `ES5` precisa se usado em uma variável personalizada `JavaScript` no [Google Tag Manager](https://tagmanager.google.com), e também pode ser parcialmente útil ao escrever tags `HTML` personalizadas. O [Google Tag Manager](https://tagmanager.google.com) usa uma versão ligeiramente diferente de `JavaScript`, conhecida como `GtmScript` - ela tem que estar na versão `ES5` e têm sintaxe própria:

<br>

- As variáveis `JavaScript` personalizadas do [Google Tag Manager](https://tagmanager.google.com) devem estar envolvidas por uma função anônima (que _não_ é `JavaScript` válido) que devem terminar em um `)` (e não em um `;`), e devem retornar alguma coisa, como o exemplo abaixo:

```javascript
function () { return true; }
```

<br>

- E é assim que se referenciam outras variáveis do [Google Tag Manager](https://tagmanager.google.com):<br>

```javascript
{{minhaVariavelJsPersonalizada}}
```

---

<br><br>

## <span id="how-to">Como converter `JavaScript` para `ES5` e então para `GtmScript`</span>

<br>

### <span id="how-to-step-1">_Passo 1_)</span>

- O primeiro passo é converter seu arquivo `JavaScript` de uma versão superior à `ES5` usando algum transpilador;
- Eu uso o `tsc` (*__TypeScript__* _compiler_), passando a opção `--allowJs` para habilitar suporte a arquivos que não sejam TypeScript.

<br>

#### <span id="how-to-step-1-example">*__Exemplo__* - _Passo 1)_</span>

- criar uma pasta de nome `es5` e gerar um arquivo `ES5` de qualquer versão do `JavaScript` suportada pelo transpilador:

<br>

```shell
mkdir es5 && tsc --allowJs --removeComments --target es5 example.js --outDir es5
```

<br><br>

Pessoalmente eu uso esse script para escrever menos código, principalmente usando _arrow functions_. Eu nunca usei o script para incorporar códigos de terceiros que tenham sido escritos em uma versão acima da `ES5`, mas ele também funciona nesses casos, e é particularmente útil ao combinar trechos de código de diferentes versões do `JavaScript`.

---

<br><br>

### <span id="how-to-step-2">_Passo 2_)</span>

- O segundo passo é usar esse script para remover uma expressão de função (function expression). Uma expressão de função é apenas uma função `JavaScript` entre parênteses:

<br>

*__Exemplo__* - expressão de função:

<br>

```javascript
( function algumaFuncao(){ return true; });
```

<br><br>

Ao criar uma variável `JavaScript` no [Google Tag Manager](https://tagmanager.google.com), é uma boa prática escrever funções anônimas:

<br>

*__Exemplo__* - variável `JavaScript` personalizada ([Google Tag Manager](https://tagmanager.google.com)):

```javascript
function() { return true; }
```

<br><br>

O problema é: como escrever o código acima usando uma _arrow function_?

```javascript
() => { return true; }
```

<br><br>

Infelizmente, o código acima não é a resposta correta. Mesmo que pareçam idênticos, quando você rodar o `tsc` para converter esse trecho de código para `ES5`, esse será o resultado:

```javascript
( function () { return true; });
```

<br><br>

E não é isso que o [Google Tag Manager](https://tagmanager.google.com) quer. Você teria que manualmente remover os parênteses externos (`(`,`)`) e o ponto e vírgula (`;`) para obter um código `ES5 GtmScript` válido, como o exemplo abaixo:

```javascript
function () { return true; }
```

<br><br>

O código acima não é sequer um código `JavaScript` válido; é `GtmScript`, e rodar um arquivo `.js` com esse código geraria um erro:<br>

```console
function () { return true; }
^^^^^^^^

SyntaxError: Function statements require a function name
```

<br><br>

E tudo bem ter que deletar algumas coisas em um único arquivo, mas quando você precisa converter vários ou muitos arquivos, é muito útil fazer essa operação de forma automatizada, e é exatamente isso que esse script faz.

---

<br><br>

Um segundo problema lidado por esse script é como referenciar outras variáveis do [Google Tag Manager](https://tagmanager.google.com) (nativas ou personalizadas), já que o código abaixo também é um código `JavaScript` inválido:

*__Exemplo__* - referência a uma variável do [Google Tag Manager](https://tagmanager.google.com):

<br>

```javascript
{{minhaVariavel}}
```

<br><br>

O código acima iria gerar um erro ao rodar o `tsc`. Descobri que uma maneira de contornar esse problema é envolver essas variáveis em aspas simples (`''`) ou duplas (`""`), como nos exemplos abaixo. Esse script se assegurará que as aspas desapareçam - elas apenas irão servir para permitir que o transpilador trabalhe corretamente (_Passo 1_).

<br>

*__Exemplo__* - como fazer referência a uma varíavel [Google Tag Manager](https://tagmanager.google.com) com uma sintaxe válida em `JavaScript`:

```javascript
'{{minhaVariavel}}'
```

_ou_

```javascript
"{{minhaVariavel}}"
```

<br><br>

#### <span id="how-to-step-2-example">*__Exemplo__* - _Passo 2)_:</span>

- rodando o [script](https://github.com/tomasfn87/wa-tools/blob/main/convertES5JsToGtmScript/convert_es5_javascript_to_gtmscript.js#L9) e obtendo um arquivo em `GtmScript`:

<br>

```shell
node convert_es5_javascript_to_gtmscript.js es5/exemplo.js
```

<br><br>

Rodar o código acima vai gerar outro arquivo com o mesmo nome base, mas com uma extensão diferente:<br>

```shell
es5/exemplo.gtm.js
```

<br><br>

O conteúdo desse arquivo `.gtm.js` está pronto para ser copiado e colado em uma variável `JavaScript` personalizada no [Google Tag Manager](https://tagmanager.google.com). Não é `JavaScript` _válido_, mas é `GtmScript` __válido__, e é isso que quem trabalha com __Web Analytics__ precisa. Desse modo você pode editar seus códigos com _arrow functions_ e sintaxe moderna localmente, e, quando for o momento de subir o código para o [Google Tag Manager](https://tagmanager.google.com), usar o `tsc` e esse script para obter o código em `GtmScript`.
