# ConvertES5JsToGtmScript

<br>

## _Convert ECMA Script 5 JavaScript to Google Tag Manager Script_

---

<br><br>

## Download the project itself and its dependencies

<br>

### _Step 1_)

- Visit the website below:

[Download GitHub Directory](https://download-directory.github.io)

<br>

### _Step 2_)

- Paste this URL in the input field and press Enter to download only this folder instead of the whole `wa-tools` repository:

```uri
https://github.com/tomasfn87/wa-tools/tree/main/convertES5JsToGtmScript
```

<br>

### _Step 3_)

- Access the folder and run the command above to install the project's dependencies (`Node.js`/`npm` must be installed):

```shell
npm install
```

_or_

```shell
npm i
```

<br>

### _Step 4_)

- Install TypeScript libraries globally on your machine to use it as your transpiler (you could also use Babel):

```shell
sudo npm i -g typescript tsc ts-node
```

<br>

---

<br><br>

## Why was this script created?

<br>

This script is meant to be used when a `JavaScript` code from a version above `ES5` needs to be used into a [Google Tag Manager](https://tagmanager.google.com) custom `JavaScript` variable, and can also be partially useful when writing custom `HTML` tags. [Google Tag Manager](https://tagmanager.google.com) uses a slightly different version of `JavaScript`, know as `GtmScript` - it has to be `ES5` and has its own syntax:

<br>

- [Google Tag Manager](https://tagmanager.google.com)'s custom `JavaScript` variables must be wrapped into an anonymous function (that is _not_ valid `JavaScript`) that has to end in a `)` (and not in a `;`), and they must return something, like the example below:

```javascript
function () { return true; }
```

<br>

- And this is how to reference other [Google Tag Manager](https://tagmanager.google.com) variables:<br>

```javascript
{{myCustomJsVariable}}
```

---

<br><br>

## How to convert `JavaScript` to `ES5` and then to `GtmScript`

<br>

### _Step 1_)

- The first step is to convert your > `ES5` `JavaScript` file using some transpiler. I use `tsc` (TypeScript compiler), passing the flag `--allowJs` to enable support for non TypeScript files.

<br>

__Example - Step 1)__:

- create a folder named '`es5`' and generate an `ES5` file from any version of `JavaScript` supported by the transpiler:

<br>

```shell
mkdir es5 && tsc --allowJs --removeComments --target es5 example.js --outDir es5
```

<br><br>

I personally use this script to write shorter code, mainly by using _arrow functions_. I never used it to incorporate third party codes that were written in a version above `ES5`, but it also works in these cases, and it's particularly useful when mixing code snippets from different versions of `JavaScript`.

---

<br><br>

### _Step 2_)

- The second step is to use this script to remove a function expression. A function expression is simply a common `JavaScript` function wrapped by parentheses:

<br>

__Example__ - function expression:

<br>

```javascript
( function someFunction(){ return true; });
```

<br><br>

When creating a custom `JavaScript` variable in [Google Tag Manager](https://tagmanager.google.com), it's a good practice to write an anonymous function:

<br>

__Example__ - custom `JavaScript` variable ([Google Tag Manager](https://tagmanager.google.com)):<br>

```javascript
function() { return true; }
```

<br><br>

The problem is: how to write the code above using an _arrow function_?

```javascript
() => { return true; }
```

<br><br>

Unfortunately, the code above is not the right answer. Even if it looks almost the same, when you run `tsc` to convert this piece of code to `ES5`, this will be the output:

```javascript
( function () { return true; });
```

<br><br>

And this is not what [Google Tag Manager](https://tagmanager.google.com) wants. You would need to manually remove the outern parentheses (`(`,`)`) and the semicolon (`;`) to obtain a valid `ES5 GtmScript`, like the example below:

```javascript
function () { return true; }
```

<br><br>

The code above is not even valid `JavaScript`; it's `GtmScript`, and running a `.js` file with this code would throw an error:<br>

```console
function () { return true; }
^^^^^^^^

SyntaxError: Function statements require a function name
```

<br><br>

And having to delete things is fine for a single file, but when you need to convert several or many files, it's very useful to do this is an automatic way to avoid making mistakes, and this is exactly what this is script does.<br>

---

<br><br>

A second problem handled by this script is how to reference other [Google Tag Manager](https://tagmanager.google.com) variables (native or customized), since the code below is also unvalid `JavaScript` code:

__Example__ - [Google Tag Manager](https://tagmanager.google.com) variable reference:

<br>

```javascript
{{myVariable}}
```

<br><br>

The code above would generate an error when running tsc. I found out that a nice workaround is to wrap these variable into single ou double quotes, as in the examples below. This script will make sure these single or double quotes disappear - they will only allow the transpiler to work correctly.

<br>

__Example__ - [Google Tag Manager](https://tagmanager.google.com) variable reference workaround, producing valid `JavaScript`:

```javascript
'{{myVariable}}'
```

_or_

```javascript
"{{myVariable}}"
```

<br>

#### _Example - Step 2)_:

- running the script and getting a `GtmScript` file:<br>

```shell
node convert_es5_javascript_to_gtmscript.js es5/example.js
```

<br><br>

Running the code above will generate another file with the same base name, but with a different extension:<br>

```shell
es5/example.gtm.js
```

<br><br>

This `.gtm.js` file content is ready to copied and pasted into a custom `JavaScript` variable in [Google Tag Manager](https://tagmanager.google.com). It's not valid `JavaScript`, but it's valid `GtmScript`, and this is what __Web Analysts__ need. This way you can edit your codes with _arrow functions_ and modern syntax locally, and, when the moment to upload the code to [Google Tag Manager](https://tagmanager.google.com), use `tsc` and this script to obtain the code in `GtmScript`.
