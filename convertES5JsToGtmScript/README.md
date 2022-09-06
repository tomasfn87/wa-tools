<h1>Download the project itself and its dependencies</h1>

<h3>1 - Visit this website:</h3>
<a href='https://download-directory.github.io'>https://download-directory.github.io</a><br><br>

<h3>2 - Paste this URL in the input field and press Enter to download only this folder instead of the whole wa-tools repository:</h3>
<a href='https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript'>https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript</a><br><br>

<h3>3 - Access the folder and run the command above to install the project's dependencies (Node.js / npm must be installed):</h3>
<code>npm install</code><br>
or<br>
<code>npm i</code><br><br>

<h3>4 - Install TypeScript libraries globally on your machine to use it as your transpiler (you could also use Babel):</h3>
<code>sudo npm i -g typescript tsc ts-node</code><br>

---
<br><h1>Why was this script created?</h1>

> This script is meant to be used when a JavaScript code from a version above ES5 needs to be used into a <a href="https://tagmanager.google.com/">Google Tag Manager</a> custom JavaScript variable, and can also be partially useful when writing custom HTML tags. <a href="https://tagmanager.google.com/">Google Tag Manager</a> uses a slightly different version of JavaScript, know as GtmScript - it has to be ES5 and has its own syntax:<br><br>

* <a href="https://tagmanager.google.com/">Google Tag Manager</a>'s Custom JavaScript variables must be wrapped into an anonymous function (that is not valid JavaScript) that has to end in a ')' (and not in a ';'), and they must return something, like the example below:<br>
<code>function () { return true; }</code>

* And this is how to reference other <a href="https://tagmanager.google.com/">Google Tag Manager</a> variables:<br>
<code>{{myCustomJsVariable}}</code>

---
<br><h1>Writing JavaScript in any version and converting to GtmScript</h1>

<h3>1 - The first step is to convert your > ES5 JavaScript file using some transpiler. I use tsc (TypeScript compiler), passing the flag --allowJs to enable support for non TypeScript files.</h3>

<strong>Example</strong> - create a folder named 'es5' and generate an ES5 file from any version of JavaScript supported by the transpiler:<br>
<code>mkdir es5 && tsc --allowJs --removeComments --target es5 example.js --outDir es5</code><br><br>

> I personally use this script to write shorter code, mainly by using arrow functions. I never used it to incorporate third party codes that were written in a version above ES5, but it also works in these cases, and it's particularly useful when mixing code from different versions of JavaScript.<br><br>
---
<h3>2 - The second step is to use this script to remove a function expression. A function expression is simply a common JavaScript function wrapped by parentheses:</h3>
<strong>Example</strong> - function expression:<br>
<code>( function someFunction(){ return true; });</code><br><br>

> When creating a custom JavaScript variable in <a href="https://tagmanager.google.com/">Google Tag Manager</a>, it's a good practice to write an anonymous function:<br><br>

<strong>Example</strong> - custom JavaScript variable (<a href="https://tagmanager.google.com/">Google Tag Manager</a>):<br>
<code>function() { return true; }</code><br><br>

> The problem is: how to write the code above using an arrow function?<br>

<code>() => { return true; }</code></br><br>

> Unfortunately, the code above is not the right answer. Even if it looks almost the same, when you run tsc to convert this piece of code to ES5, this will be the output:<br>

<code>(function () { return true; });</code><br><br>

> And this is not what <a href="https://tagmanager.google.com/">Google Tag Manager</a> wants. You would need to manually remove the outern parentheses and the semicolon (;) to obtain a valid ES5 GtmScript, like the example below:

<code>function () { return true; }</code><br><br>

> The code above is not even valid JavaScript; it's GtmScript, and running a .js file with this code would throw an error:<br>

<code>function () { return true; }</code><br>
<code>^^^^^^^^</code><br><br>
<code>SyntaxError: Function statements require a function name</code><br><br>

> And having to delete things is fine for a single file, but when you need to convert several or many files, it's very useful to do this is an automatic way to avoid making mistakes, and this is exactly what this is script does.<br><br>
---
> A second problem handled by this script is how to reference other <a href="https://tagmanager.google.com/">Google Tag Manager</a> variables (native or customized), since the code below is also unvalid JavaScript code:

<strong>Example</strong> - <a href="https://tagmanager.google.com/">Google Tag Manager</a> variable reference:<br>
<code>{{myVariable}}</code>

> The code above would generate an error when running tsc. I found out that a nice workaround is to wrap these variable into single ou double quotes, as in the examples below. This script will make sure these single or double quotes disappear - they will only allow the transpiler to work correctly.

<strong>Example</strong> - <a href="https://tagmanager.google.com/">Google Tag Manager</a> variable reference workaround, producing valid JavaScript:<br>
<code>'{{myVariable}}'</code><br>
or<br>
<code>"{{myVariable}}"</code><br>

<strong>Example</strong> - running the script and getting a GtmScript file:<br>
<code>node convert_es5_javascript_to_gtmscript.js es5/example.js</code><br>

> Running the code above will generate another file with the same base name, but with a different extension:<br>

<code>es5/example.gtm.js</code><br><br>

> This .gtm.js file content is ready to copied and pasted into a custom JavaScript variable in <a href="https://tagmanager.google.com/">Google Tag Manager</a>. It's not valid JavaScript, but it's valid GtmScript, and this is what Web Analysts need. This way you can edit your codes with arrow functions and modern syntax locally, and, when the moment to upload the code to <a href="https://tagmanager.google.com/">Google Tag Manager</a>, use tsc and this script to obtain the code in GtmScript.<br>
