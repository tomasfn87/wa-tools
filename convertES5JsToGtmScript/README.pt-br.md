# Baixar o projeto em si e suas dependências

### 1 - Entre nesse website:
<a href='https://download-directory.github.io'>https://download-directory.github.io</a><br><br>

### 2 - Cole essa URL no campo de entrada e aperte Enter para baixar apenas essa pasta ao invés de todo o repositório wa-tools:
<a href='https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript'>https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript</a><br><br>

### 3 - Acesse a pasta e rode o comando abaixo para instalar as dependências do projeto (Node.js / npm devem estar instalados):

```sh
npm install
```

ou

```sh
npm i
```

<br>

### 4 - Instale as bibliotecas do TypeScript globalmente na sua máquina para usar como o seu transpilador (você também pode usar Babel):

```sh
sudo npm i -g typescript tsc ts-node
```

<br>

---
# Por quê esse script foi criado?

Esse script é para ser usado quando um código JavaScript de uma versão acima da ES5 precisa se usado em uma variável personalizada JavaScript no <a href="https://tagmanager.google.com/">Google Tag Manager</a>, e também pode ser parcialmente útil ao escrever tags HTML personalizadas. O <a href="https://tagmanager.google.com/">Google Tag Manager</a> usa uma versão ligeiramente diferente de JavaScript, conhecida como GtmScript - ela tem que estar na versão ES5 e têm sintaxe própria:<br><br>

* As variáveis JavaScript personalizadas do <a href="https://tagmanager.google.com/">Google Tag Manager</a> devem estar envolvidas por uma função anônima (que não é JavaScript válido) que devem terminar em um ')' (e não em um ';'), e devem retornar alguma coisa, como o exemplo abaixo:<br>

```javascript
function () { return true; }
```

* E é assim que se referenciam outras variáveis do <a href="https://tagmanager.google.com/">Google Tag Manager</a>:<br>

```javascript
{{minhaVariavelJsPersonalizada}}
```

<br>

---
# Escrevendo JavaScript em qualquer versão e convertendo para GtmScript

## 1 - O primeiro passo é converter seu arquivo JavaScript > ES5 usando algum transpilador. Eu uso o tsc (TypeScript compiler - compilador TypeScript), passando a opção --allowJs para habilitar suporte a arquivos que não sejam TypeScript.<br><br>

<strong>Exemplo</strong> - criar uma pasta de nome 'es5' e gerar um arquivo ES5 de qualquer versão do JavaScript suportada pelo transpilador:<br>

```sh
mkdir es5 && tsc --allowJs --removeComments --target es5 example.js --outDir es5
```

<br>

Pessoalmente eu uso esse script para escrever menos código, principalmente usando arrow functions. Eu nunca usei o script para incorporar códigos de terceiros que tenham sido escritos em uma versão acima da ES5, mas ele também funciona nesses casos, e é particularmente útil ao combinar códigos de diferentes versões do JavaScript.<br><br>
---
## 2 - O segundo passo é usar esse script para remover uma expressão de função (function expression). Uma expressão de função é apenas uma função JavaScript entre parênteses:<br><br>
<strong>Exemplo</strong> - expressão de função:<br>

```javascript
( function algumaFuncao(){ return true; });
```

<br>

Ao criar uma variável JavaScript no <a href="https://tagmanager.google.com/">Google Tag Manager</a>, é uma boa prática escrever funções anônimas:<br><br>

<strong>Exemplo</strong> - variável JavaScript personalizada (<a href="https://tagmanager.google.com/">Google Tag Manager</a>):<br>

```javascript
function() { return true; }
```

<br>

O problema é: como escrever o código acima usando uma arrow function?<br>

```javascript
() => { return true; }
```

<br>

Infelizmente, o código acima não é a resposta correta. Mesmo que pareçam idênticos, quando você rodar o tsc para converter esse trecho de código para ES5, esse será o resultado:<br>

```javascript
( function () { return true; });
```

<br>

E não é isso que o <a href="https://tagmanager.google.com/">Google Tag Manager</a> quer. Você teria que manualmente remover os parênteses externos e o ponto e vírgula (;) para obter um código ES5 GtmScript válido, como o exemplo abaixo:

```javascript
function () { return true; }
```

<br>

O código acima não é sequer um código JavaScript válido; é GtmScript, e rodar um arquivo .js com esse código geraria um erro:<br>

```
function () { return true; }
^^^^^^^^

SyntaxError: Function statements require a function name
```

<br>

E tudo bem ter que deletar algumas coisas em um único arquivo, mas quando você precisa converter vários ou muitos arquivos, é muito útil fazer essa operação de forma automatizada, e é exatamente isso que esse script faz.<br><br>

---
<br>

Um segundo problema lidado por esse script é como referenciar outras variáveis do <a href="https://tagmanager.google.com/">Google Tag Manager</a> (nativas ou personalizadas), já que o código abaixo também é um código JavaScript inválido:

<strong>Exemplo</strong> - referência a uma variável do <a href="https://tagmanager.google.com/">Google Tag Manager</a>:<br>

```javascript
{{minhaVariavel}}
```

O código acima iria gerar um erro ao rodar o tsc. Descobri que uma maneira de contornar esse problema é envolver essas variáveis em aspas simples ou duplas, como nos exemplos abaixo. Esse script se assegurará que as aspas desapareçam - elas apenas irão servir para permitir que o transpilador trabalhe corretamente.

<strong>Exemplo</strong> - como fazer referência a uma varíavel <a href="https://tagmanager.google.com/">Google Tag Manager</a> com uma sintaxe válida em JavaScript:<br>

```javascript
'{{minhaVariavel}}'
```

ou

```javascript
"{{minhaVariavel}}"
```

<br>

<strong>Exemplo</strong> - rodando o script e obtendo um arquivo em GtmScript:<br>

```sh
node convert_es5_javascript_to_gtmscript.js es5/exemplo.js
```

<br>

Rodar o código acima vai gerar outro arquivo com o mesmo nome base, mas com uma extensão diferente:<br>

```sh
es5/exemplo.gtm.js
```

<br>

> O conteúdo desse arquivo .gtm.js está pronto para ser copiado e colado em uma variável JavaScript personalizada no <a href="https://tagmanager.google.com/">Google Tag Manager</a>. Não é JavaScript válido, mas é GtmScript válido, e é isso que o pessoal de Web Analytics precisa. Desse modo você pode editar seus códigos com arrow functions e sintaxe moderna localmente, e, quando for o momento de subir o código para o <a href="https://tagmanager.google.com/">Google Tag Manager</a>, usar o tsc e esse script para obter o código em GtmScript.<br>
