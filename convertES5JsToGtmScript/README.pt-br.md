<h1>Baixar o projeto em si e suas dependências<h1>

1 - Entre nesse website:<br>
<a href='https://download-directory.github.io'>https://download-directory.github.io</a><br><br>

2 - Cole essa URL no campo de entrada e aperte Enter para baixar apenas essa pasta ao invés de todo o repositório wa-tools:<br>
<a href='https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript'>https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript</a><br><br>

3 - Acesse a pasta e rode o comando abaixo para instalar as dependências do projeto (Node.js / npm devem estar instalados):<br>
<code>npm install</code><br>
ou<br>
<code>npm i</code><br><br>

4 - Instale as bibliotecas do TypeScript globalmente na sua máquina para usar como o seu transpilador (você também pode usar Babel):<br>
<code>sudo npm i -g typescript tsc ts-node</code><br>

<br><h1>Por quê esse script foi criado?<h1>

> Esse script é para ser usado quando um código JavaScript de uma versão acima da ES5 precisa se usado em uma variável personalizada JavaScript no Google Tag Manager, e também pode ser parcialmente útil ao escrever tags HTML personalizadas. O Google Tag Manager usa uma versão ligeiramente diferente de JavaScript, conhecida como GtmScript - ela tem que estar na versão ES5 e têm sintaxe própria:<br><br>

* As variáveis JavaScript personalizadas do Google Tag Manager devem estar envolvidas por uma função anônima (que não é JavaScript válido) que devem terminar em um ')' (e não em um ';'), e devem retornar alguma coisa, como o exemplo abaixo:<br>
<code>function () { return true; }</code>

* E é assim que se referenciam outras variáveis do Google Tag Manager:<br>
<code>{{minhaVariavelJsPersonalizada}}</code>

<br><h1>Escrevendo JavaScript em qualquer versão e convertendo para GtmScript<h1>

1 - O primeiro passo é converter seu arquivo JavaScript > ES5 usando algum transpilador. Eu uso o tsc (TypeScript compiler - compilador TypeScript), passando a opção --allowJs para habilitar suporte a arquivos que não sejam TypeScript.<br><br>

<strong>Exemplo</strong> - criar uma pasta de nome 'es5' e gerar um arquivo ES5 de qualquer versão do JavaScript suportada pelo transpilador:<br>
<code>mkdir es5 && tsc --allowJs --removeComments --target es5 example.js --outDir es5</code><br><br>

> Pessoalmente eu uso esse script para escrever menos código, principalmente usando arrow functions. Eu nunca usei o script para incorporar códigos de terceiros que tenham sido escritos em uma versão acima da ES5, mas ele também funciona nesses casos, e é particularmente útil ao combinar códigos de diferentes versões do JavaScript.<br><br>

2 - O segundo passo é usar esse script para remover uma expressão de função (function expression). Uma expressão de função é apenas uma função JavaScript entre parênteses:<br><br>

<strong>Exemplo</strong> - expressão de função:<br>
<code>( function algumaFuncao(){ return true; });</code><br><br>

> Ao criar uma variável JavaScript no Google Tag Manager, é uma boa prática escrever funções anônimas:<br><br>

<strong>Exemplo</strong> - variável JavaScript personalizada (Google Tag Manager):<br>
<code>function() { return true; }</code><br><br>

> O problema é: como escrever o código acima usando uma arrow function?<br>
<code>() => { return true; }</code></br><br>

> Infelizmente, o código acima não é a resposta correta. Mesmo que pareçam idênticos, quando você rodar o tsc para converter esse trecho de código para ES5, esse será o resultado:<br>

<code>( function () { return true; });</code><br><br>

> E não é isso que o Google Tag Manager quer. Você teria que manualmente remover os parênteses externos e o ponto e vírgula (;) para obter um código ES5 GtmScript válido, como o exemplo abaixo:

<code>function () { return true; }</code><br><br>

> O código acima não é sequer um código JavaScript válido; é GtmScript, e rodar um arquivo .js com esse código geraria um erro:<br>

<code>function () { return true; }<br>
^^^^^^^^
<br><br>
SyntaxError: Function statements require a function name</code><br><br>

> E tudo bem ter que deletar algumas coisas em um único arquivo, mas quando você precisa converter vários ou muitos arquivos, é muito útil fazer essa operação de forma automatizada, e é exatamente isso que esse script faz.<br><br>
---
> Um segundo problema lidado por esse script é como referenciar outras variáveis do Google Tag Manager (nativas ou personalizadas), já que o código abaixo também é um código JavaScript inválido:

<strong>Exemplo</strong> - referência a uma variável do Google Tag Manager:<br>
<code>{{minhaVariavel}}</code>

> O código acima iria gerar um erro ao rodar o tsc. Descobri que uma maneira de contornar esse problema é envolver essas variáveis em aspas simples ou duplas, como nos exemplos abaixo. Esse script se assegurará que as aspas desapareceram - eles só irão servir para permitir que o transpilador trabalhe corretamente.

<strong>Exemplo</strong> - como fazer referência a uma varíavel Google Tag Manager com uma sintaxe válida em JavaScript:<br>
<code>'{{minhaVariavel}}'</code><br>
ou<br>
<code>"{{minhaVariavel}}"</code><br>

<strong>Exemplo</strong> - rodando o script e obtendo um arquivo em GtmScript:
<code>node convert_es5_javascript_to_gtmscript.js es5/exemplo.js</code><br>

> Rodar o código acima vai gerar outro arquivo com o mesmo nome base, mas com uma extensão diferente:<br>

<code>es5/exemplo.gtm.js</code><br><br>

> O conteúdo desse arquivo .gtm.js está pronto para ser copiado e colado em uma variável JavaScript personalizada no Google Tag Manager. Não é JavaScript válido, mas é GtmScript válido, e é isso que o pessoal de Web Analytics precisa. Desse modo você pode editar seus códigos com arrow functions e sintaxe moderna localmente, e, quando for o momento de subir o código para o Google Tag Manager, usar o tsc e esse script para obter o código em GtmScript.<br>
