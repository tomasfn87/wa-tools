# findPreviousOrNextTag

<br>

## Table of contents

- [Download this folder](#download)
  - [`git` CLI](#download-git)
  - [Browser](#download-browser)
- [Application](#application)
  - [1. When not to use](#application-no)
  - [2. When to use](#application-yes)
- [Function description](#function-description)
  - [1. getOrderedSiblingTags](#get-ordered-sibling-tags) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/getOrderedSiblingTags.js#L1))
  - [2. findFirstPreviousSiblingTag](#find-first-previous-sibling-tag) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L22))
  - [3. findFirstPreviousTag](#find-first-previous-tag) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L3))
  - [4. findFirstNextSiblingTag](#find-first-next-sibling-tag) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L53))
  - [5. findFirstNextTag](#find-first-next-tag) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L34))
- [Query tags using CSS selectors instead of tag names](#query-using-css)
  - [6. findFirstPreviousSiblingTagByCssSelector](#find-first-previous-sibling-tag-by-css-selector) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L22))
  - [7. findFirstPreviousTagByCssSelector](#find-first-previous-tag-by-css-selector) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L3))
  - [8. findFirstNextSiblingTagByCssSelector](#find-first-next-sibling-tag-by-css-selector) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L53))
  - [9. findFirstNextTagByCssSelector](#find-first-next-tag-by-css-selector) ([`code`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L34))
- [Example](#example)

<br>

## <span id="download">Download only this project from [`wa-tools`](https://github.com/tomasfn87/wa-tools)</span>

<br>

### <span id="download-git">Using `git` CLI</span>

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./findPreviousOrNextTag && cd findPreviousOrNextTag && git sparse-checkout set findPreviousOrNextTag && git checkout && mv findPreviousOrNextTag/* . && rm -rf {findPreviousOrNextTag,.git}
```

---

<br>

### <span id="download-browser">Using a web browser</span>

1. Go to [Download GitHub Directory](https://download-directory.github.io)
2. Paste the URL below in the input field and press `Enter` to download only this folder instead of the whole `wa-tools` repository

```uri
https://github.com/tomasfn87/wa-tools/tree/main/findPreviousOrNextTag
```

---

<br>

## <span id="application">Application</span>

<br>

This set of functions is meant to help with __Web Tracking__ (_specially with_ [Google Tag Manager](https://tagmanager.google.com), when you have groups of repeated elements all inside a mother tag, that may be a `<div>` or a `<section>`, for example.

You cannot use the `parentNode` or `parentElement` JavaScript method, because the tags are siblings: they are all inside the same mother tag.

---

<br><br>

### <span id="application-no">1) When not to use</span>

<br>

*__The elements are clearly grouped; they're wrapped by different mother tags, that allow a__* `querySelector` *__method to do the job.__*

__Example__ - each group is wrapped in a `<div>`: you have to access the closest `<h3>` content from a click on one of the `<a>` tags:

```html
<div>
  <h3>Title 1</h3>
  <p><a href="#">Click here 1</a></p>
</div>
<div>
  <h3>Title 2</h3>
  <p><a href="#">Click here 2</a></p>
</div>
<div>
  <h3>Title 3</h3>
  <p><a href="#">Click here 3</a></p>
</div>
```

You want your tag to tell the user __"this click is under this title"__ (_the closest_ `<h3>`'s _content, upwards_). So, a click on `Click here 1` would be related to `Title 1`, a click on `Click here 2` to `Title 2`, and so on.

<br>

The code below is a [Google Tag Manager](https://tagmanager.google.com) custom JavaScript variable that is doing the job described above: it will correlate a click on a `<a>` with the `<h3>`'s content under the same `<div>`:

<br>

Content of `myVariable`:

```javascript
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h3').innerText;
}
```

*__The way to follow is clear here__*: you just have to go up two elements and then use the `querySelector` method: the first `parentNode` will point to the `<p>` tag; the second `parentNode` will point to the `<div>` tag and then the `querySelector('h3')` will point to the first `<h3>` tag.

<br>

`{{myVariable}}` - this is how to access other variables in [Google Tag Manager](https://tagmanager.google.com), whether from another custom JavaScript variable or from a custom HTML tag, or to use its output as a tag's parameter's value.

There is a set of native variables available. `{{Click Element}}` is one of [Google Tag Manager's](https://tagmanager.google.com) most useful native variables. It returns the clicked (_or touched_) element __HTML tag__, allowing you to manipulate and navigate through its siblings, children and parent tags, like this project's __functions__ do.

---

<br><br>

### <span id="application-yes">2) When to use</span>

<br>

*__The elements are not clearly grouped, because they're wrapped by only one mother tag.__*

__Example__ - the groups are all inside a mother tag (`<div>`):

```html
<div>
  <h3>Title 1</h3>
  <p><a href="#">Click here 1</a></p>
  <h3>Title 2</h3>
  <p><a href="#">Click here 2</a></p>
  <h3>Title 3</h3>
  <p><a href="#">Click here 3</a></p>
</div>
```

You need to reference a `<h3>` value from a click on one of the `<a>`, but, if you use the method described in 1), you will always get the first `<h1>`.

<br>

You need that a click on `Click here 1` to return `Title 1`; a click on `Click here 2` to return `Title 2`, and so on.

But, in this case, applying the `querySelector` method on the parent `<div>` wouldn't work: it would always return `Title 1`, because there's a single mother `<div>` wrapping all the `<h3>`/`<p>` pairs.

You want the closest `<h3>` sibling tag upwards, in this case.

<br>

That's when this project comes in handy: you need to navigate through the sibling tags, meaning you don't want to access the tag's parent tag, but you want to search through its closest siblings, both upwards or downards, and, only then, go one level up, if a tag with the name you specified is not present.

---

<br><br>

## <span id="function-description">Function description</span>

<br>

:bulb: **Tip:** Remember to appreciate the little things in life.

<br>

### <span id="get-ordered-sibling-tags">1) [`getOrderedSiblingTags( tagElement, s = 'both')`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/getOrderedSiblingTags.js#L1)</span>

<br>

This is the base function, and it's called by functions 2) to 9), directly or indirectly, and it's _not_ meant to be used by itself.

<br>

It takes as its first argument an __HTML tag__, and, as its second optional argument a parameter: `'previous'`, `'next'` or `'both'` (`'both'` _is the standard value_).

`getOrderedSiblingTags` returns an object that contains the __HTML tag__ received as argument itself and all of its siblings splitted in two arrays, `'previous'` and `'next'`. It can also output two side functions (_when the parameter_ `'both'` _is received_), `toArray` and `tagPosition`, that return all the sibling tags as an array and the __HTML tag__ received as argument's position in this array, respectively.

<br>

#### Description of the properties of the object returned by function `getOrderedSiblingTags`

```javascript
{
    tag:           htmlTag, // the HTML tag received as first argument;
    siblings: {
        next:        [ ...next ] || [],    // the sibling tags after 'tag';
        previous:    [ ...previous ] || [] // the sibling tags before 'tag';
    },
    toArray() =>     [ ...previous, tag, ...next ] || [ tag ]
                         || [ ...previous, tag ] || [ tag, ...next ],
    // this function returns all the siblings tags, in order, including 'tag';
    tagPosition() => number // this function returns 'tag's position in 'toArray()'.
}
```

- `tag`: the tag received as first argument by `getOrderedSiblingTags`;
- `siblings.next`: if `'both'` or `'next'` is passed as second argument, it will contain all the tags after the __HTML tag__ received as first argument, as an array;
- `siblings.previous`: if `'both'` or `'previous'` is passed as second argument, it will contain all the tags before the __HTML tag__ received as first argument, as an array;
- `toArray()`: if `'both'` is passed as second argument, this __function__ will be available and will return all the sibling tags as an array; the __HTML tag__ received as first argument will be into the correct position inside the array;
- `tagPosition()`: if `'both'` is passed as second argument, this __function__ will be available and will return the tag's position in `toArray()`, allowing you to access it easily.

---

<br>

### <span id="find-first-previous-sibling-tag">2) [`findFirstPreviousSiblingTag( tagElement, tagName )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L22)</span>

<br>

`findFirstPreviousSiblingTag` calls `getOrderedSiblingTags` with `'previous'` as second argument to try to find the first previous sibling tag that matches the name passed to `tagName`.

<br>

`findFirstPreviousSiblingTag` receives two arguments:

- `tagElement`: the __HTML tag__ that will be the search's starting point;
- `tagName`: the name of the tag that is meant to be found among the preceding sibling tags.

<br>

`findFirstPreviousSiblingTag` returns:

- an __HTML tag__ with the same name as `tagName`;
- `null`, if a matching tag is not found.

---

<br>

### <span id="find-first-previous-tag">3) [`findFirstPreviousTag( tagElement, tagName, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L3)</span>

<br>

`findFirstPreviousTag` calls `findFirstPreviousSiblingTag` several times to broaden the search by calling the `parentNode` method to also look into the previous sibling tags of the parent tag of `tagElement`.

<br>

`findFirstPreviousSiblingTag` receives three arguments:

- `tagElement`: the __HTML tag__ that will be the search's starting point;
- `tagName`: the name of the __HTML tag__ that is meant to be found among the preceding sibling tags;
- `levelsUp`: a number that indicates how many levels up the search can reach (_or how many times_ `parentNode` _method can be called_).

<br>

`findFirstPreviousTag` returns:

- an __HTML tag__ with the same name as `tagName`;
- `null`, if a matching tag is not found.

---

<br>

### <span id="find-first-next-sibling-tag">4) [`findFirstNextSiblingTag( tagElement, tagName )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L53)</span>

<br>

`findFirstNextSiblingTag` calls `getOrderedSiblingTags` with `'next'` as second argument to try to find the first next sibling tag that matches the name passed to `tagName`.

<br>

`findFirstNextSiblingTag` receives two arguments:

- `tagElement`: the __HTML tag__ that will be the search's starting point;
- `tagName`: the name of the __HTML tag__ that is meant to be found among the following sibling tags.

<br>

`findFirstNextSiblingTag` returns:

- an __HTML tag__ with the same name as `tagName`;
- `null`, if a matching tag is not found.

---

<br>

### <span id="find-first-next-tag">5) [`findFirstNextTag( tagElement, tagName, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTag.js#L34)</span>

<br>

`findFirstNextTag` calls `findFirstNextSiblingTag` several times to broaden the search by calling the `parentNode` method to also look into the previous sibling tags of the parent tag of `tagElement`.

<br>

`findFirstNextTag` receives three arguments:

- `tagElement`: the __HTML tag__ that will the be search's starting point;
- `tagName`: the name of the __HTML tag__ that is meant to be found among the following sibling tags;
- `levelsUp`: a number that indicates how many levels up the search will go (_or how many times_ `parentNode` _method can be called_).

<br>

`findFirstNextTag` returns:

- an __HTML tag__ with the same name as `tagName`;
- `null`, if a matching tag is not found.

---

<br><br>

## <span id="query-using-css">Query tags using CSS selectors instead of tag names</span>

<br>

Functions  `findFirstPreviousTagByCssSelector`, `findFirstPreviousSiblingTagByCssSelector`, `findFirstNextTagByCssSelector` and `findFirstNextSiblingTagByCssSelector` work the same way as `findFirstPreviousTag`, `findFirstPreviousSiblingTag`, `findFirstNextTag` and `findFirstNextSiblingTag`, respectively, but they allow the use of CSS selectors instead of tag names, enabling them to identify whatever is possible to write in a CSS selector:

<br>

### <span id="find-first-previous-sibling-tag-by-css-selector">6) [`findFirstPreviousSiblingTagByCssSelector( tagElement, cssSelector )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L22)</span>

---

<br>

### <span id="find-first-previous-tag-by-css-selector">7) [`findFirstPreviousTagByCssSelector( tagElement, cssSelector, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L3)</span>

---

<br>

### <span id="find-first-next-sibling-tag-by-css-selector">8) [`findFirstNextSiblingTagByCssSelector( tagElement, cssSelector )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#L53)</span>

---

<br>

### <span id="find-first-next-tag-by-css-selector">9) [`findFirstNextTagByCssSelector( tagElement, cssSelector, levelsUp )`](https://github.com/tomasfn87/wa-tools/blob/main/findPreviousOrNextTag/findPreviousOrNextTagByCssSelector.js#34)</span>

---

<br><br>

## <span id="example">Example</span>

<br>

```javascript
const myProductButton = document.querySelectorAll('button.add-item')[2];
const myProductTitleTag = findFirstPreviousTagByCssSelector(myProductButton, 'h4.cart-item-title', 5);
const myProductTitle = myProductTitleTag.innerText;
```
