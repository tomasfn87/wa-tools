# `youTubeUrlShortener`

## *YouTube URL Shortener*

`youTubeUrlShortener` is a function that turns the main kinds of YouTube URLs into the shortest possible official URL, using the `youtu.be` notation.

---

<br>

## Download only this project from [`wa-tools`](https://github.com/tomasfn87/wa-tools)

### Using `git` CLI

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./youTubeUrlShortener && cd youTubeUrlShortener && git sparse-checkout set youTubeUrlShortener && git checkout && mv youTubeUrlShortener/* . && rm -rf {youTubeUrlShortener,.git}
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

> The comments represent the results.

```javascript
youTubeUrlShortener(
    "https://www.youtube.com/watch?v=I845O57ZSy4&" // -> youtu.be/I845O57ZSy4
)
```

```javascript
youTubeUrlShortener(
    "https://m.youtube.com/watch?v=I845O57ZSy4" // -> youtu.be/I845O57ZSy4
)
```

```javascript
youTubeUrlShortener(
    "http://youtube.com/embed/I845O57ZSy4" // -> youtu.be/I845O57ZSy4
)
```

```javascript
youTubeUrlShortener(
    "http://youtu.be/I845O57ZSy4" // -> youtu.be/I845O57ZSy4
)
```
