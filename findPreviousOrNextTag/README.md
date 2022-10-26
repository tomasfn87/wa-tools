# FindPreviousOrNextTag

<br>

## Application

<br>

This script is meant to help when working with __Web Tracking__ (specially with <a href="https://tagmanager.google.com">Google Tag Manager</a>) and you have groups of repeated elements all inside a mother tag, that may be a `<div>` or a `<section>`, for example.

You cannot use the `parentNode` or `parentElement` JavaScript method, because the tags are siblings: they are all inside the same mother tag.

---

<br><br>

### 1) When not to use

<br>

_The elements are clearly grouped; they're wrapped by different mother tags, that allow a_ `querySelector` _method to do the job_.

__Example__ - each group is wrapped in a `<div>`: you have to access the closest `<h1>` content from a click on one of the `<a>` tags:

```html
<div>
  <h1>Title 1</h1>
  <p><a href="#">Click here 1</a></p>
</div>
<div>
  <h1>Title 2</h1>
  <p><a href="#">Click here 2</a></p>
</div>
<div>
  <h1>Title 3</h1>
  <p><a href="#">Click here 3</a></p>
</div>
```

You want your tag to tell the user "_this click is under this title_" (the closest `<h1>`'s content upwards). So, a click on `Click here 1` would be related to `Title 1`, a click on `Click here 2` to `Title 2`, and so on.

<br>

The code below is a <a href="https://tagmanager.google.com">Google Tag Manager</a> custom JavaScript variable that is doing the job described above: it will correlate a click on a `<a>` with the `<h1>`'s content under the same `<div>`:

<br>

Content of `myVariable`:

```javascript
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h1').innerText;
}
```

_The way to follow is clear here_: you just have to go up two elements and then use the `querySelector` method: the first `parentNode` will point to the `<p>` tag; the second `parentNode` will point to the `<div>` tag and then the `querySelector('h1')` will point to the first `<h1>` tag.

<br>

`{{myVariable}}` is how you access variables, whether from another custom JavaScript variable or from a custom HTML tag, or to use its output as a tag's parameter's value.

There is a set of native variables available. `{{Click Element}}` is one of <a href="https://tagmanager.google.com">Google Tag Manager</a>'s most useful native variables. It returns the clicked (or touched) element __HTML tag__, allowing you to manipulate and navigate through its siblings, children and parent tags, like this project's __functions__ do.

---

<br><br>

### 2) When to use

<br>

_The elements are not clearly grouped, because they're wrapped by only one mother tag._

__Example__ - the groups are all inside a mother tag (`<div>`):

```html
<div>
  <h1>Title 1</h1>
  <p><a href="#">Click here 1</a></p>
  <h1>Title 2</h1>
  <p><a href="#">Click here 2</a></p>
  <h1>Title 3</h1>
  <p><a href="#">Click here 3</a></p>
</div>
```

You need to reference a `<h1>` value from a click on one of the `<a>`, but, if you use the method described in 1), you will always get the first `<h1>`.

<br>

You need that a click on `Click here 1` to return `Title 1`; a click on `Click here 2` to return `Title 2`, and so on.

But, in this case, applying the `querySelector` method on the parent `<div>` wouldn't work: it would always return `Title 1`, because there's a single mother `<div>` wrapping all the `<h1>` / `<p>` pairs.

You want the closest `<h1>` sibling tag upwards, in this case.

<br>

That's when this project comes in handy: you need to navigate through the sibling tags, meaning you don't want to access the tag's parent tag, but you want to search through its closest brothers, both upwards or downards, and, only then, go one level up, if a tag with the name you specified is not present.

---

<br><br>

## Function description

<br><br>

### 1) `getOrderedSiblingTags( tagElement, s = 'both')`

<br>

This is the base function, and it's called by functions 2) to 5), directly or indirectly, and it's _not_ meant to be used by itself.

<br>

It takes as its first argument an __HTML tag__, and, as its second optional argument a parameter: `'previous'`, `'next'` or `'both'` (_'both'_ is the standard value).

`getOrderedSiblingTags` returns an object that contains the __HTML tag__ received as argument itself and all of its siblings splitted in two arrays, `'previous'` and `'next'`. It can also output two side functions (when the parameter `'both'` is received), `toArray` and `tagPosition`, that return all the sibling tags as an array and the __HTML tag__ received as argument's position in this array, respectively.

<br>

#### Description of the properties of the object returned by function `getOrderedSiblingTags`

```javascript
{
  tag:         "(REQUIRED) the HTML tag received as argument",
  siblings: {
    next:      "[ ...next ] || []",
    previous:  "[ ...previous ] || []"
  },
  toArray:     "[ ...previous, tag, ...next ] || [ tag ] || [ ...previous, tag ] || [ tag, ...next ]",
  tagPosition: "number (previous.length)"
}
```

- `tag`: contains the tag received as argument by `getOrderedSiblingTags`;
- `siblings.next`: if `'both'` or `'next'` is passed as second argument, it will contain all the tags after the __HTML tag__ received as first argument, as an array;
- `siblings.previous`: if `'both'` or `'previous'` is passed as second argument, it will contain all the tags before the __HTML tag__ received as first argument, as an array;
- `toArray`: if `'both'` is passed as second argument, this __function__ will be available and will return all the sibling tags as an array; the __HTML tag__ received as first argument will be into the correct position inside the array;
- `tagPosition`: if `'both'` is passed as second argument, this __function__ will be available and will return the tag's position in `toArray`, allowing you to access it easily.

---

<br>

### 2) `findFirstPreviousSiblingTag`

<br>



---

<br>

### 3) `findFirstPreviousTag`

<br>



---

<br>

### 4) `findFirstNextSiblingTag`

<br>



---

<br>

### 5) `findFirstNextTag`

<br>
