# `youTubeUrlShortener`

## *YouTube URL Shortener*

`youTubeUrlShortener` is a function that turns the main kinds of YouTube URLs into the shortest possible official URL, using the `youtu.be` notation.

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
