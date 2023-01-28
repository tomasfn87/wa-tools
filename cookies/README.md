# cookies

<br>

`cookies` has three functions:

1. `getCookiesAsObjArr`: this function parses a cookie string into objects;
2. `printCookieAndURL`: this function calls `1` to print a cookie string in the terminal;
3. `printColoredCookieAndURL`: this function calls `1` to print a colored output of a cookie string in the terminal, using `Node`'s [`colors`](https://www.npmjs.com/package/colors) package.

---

<br>

## Download only this project from [`wa-tools`](https://github.com/tomasfn87/wa-tools)

### Using `git` CLI

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./cookies && cd cookies && git sparse-checkout set cookies && git checkout && mv cookies/* . && rm -rf {cookies,.git}
```

---

### Using a web browser

1. Go to [Download GitHub Directory](https://download-directory.github.io)
2. Paste the URL below in the input field and press `Enter` to download only this folder instead of the whole `wa-tools` repository

```uri
https://github.com/tomasfn87/wa-tools/tree/main/cookies
```

---

<br>

## Commands

- Compiling with [`tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```shell
mkdir dist && tsc getCookies.ts --target es2021 --outFile dist/getCookies.cjs
```

- Running with [`node`](https://nodejs.org/)

```shell
node dist/getCookies.cjs
```
