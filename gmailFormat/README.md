# `gmailFormat`

## *Gmail Format*

`gmailFormat` is a function that removes dots (`.`) from an e-mail address' first part (before the `@`) when it's a gmail or googlemail account.

> It also removes trailing empty spaces and converts all characters to lower case as a way to enforce this good practice.

---

<br>

## Download only this project from [`wa-tools`](https://github.com/tomasfn87/wa-tools)

### Using `git` CLI

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./gmailFormat && cd gmailFormat && git sparse-checkout set gmailFormat && git checkout && mv gmailFormat/* . && rm -rf {gmailFormat,.git}
```

---

### Using a web browser

1. Go to [Download GitHub Directory](https://download-directory.github.io)
2. Paste the URL below in the input field and press `Enter` to download only this folder instead of the whole `wa-tools` repository

```uri
https://github.com/tomasfn87/wa-tools/tree/main/youTubeUrlShortener
```

---

## *Examples*

> *The comments represent the results.*

```javascript
gmailFormat(
    "te.st@gmail.com" // -> test@gmail.com
)
```

```javascript
gmailFormat(
    "TE.ST@GOOGLEMAIL.COM" // -> test@googlemail.com
)
```

```javascript
gmailFormat(
    "te.st@nmail.com" // -> te.st@nmail.com
)
```
