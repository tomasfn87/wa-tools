# findPreviousOrNextTag

<br>

## Application

<br>

This script is meant to help when working with <b>Web Tracking</b> (specially with <a href="https://tagmanager.google.com">Google Tag Manager</a>) and you have groups of repeated elements all inside a mother tag, that may be a ```<div>``` or a ```<section>```, for example.

You cannot use the ```parentNode``` or ```parentElement``` JavaScript method, because the tags are siblings: they are all inside a mother tag.

---

<br><br>

### 1. When not to use

<br>

<b>Example</b> - each group is wrapped in a ```<div>```:
You have to get the closest ```<h1>``` content from a click on one of the ```<a>```'s:

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

The code above is a <a href="https://tagmanager.google.com">Google Tag Manager</a> custom JavaScript variable. The way is clear here: you just have to go up two elements and then use the ```querySelector```</code> method:

```javascript
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h1');
}
```

<br>

```{{Click Element}}``` is a variable available in <a href="https://tagmanager.google.com">Google Tag Manager</a> that returns the clicked or touched element <b>HTML tag</b>.

---

<br><br>

### 2. When to use

<br>

<b>Example</b> - the groups are all inside a mother tag (```<div>```):
You need to reference a ```<h1>``` value from a click on of the ```<a>```, but, if you use the method described in 1), you will always get the first ```<h1>```.


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

That's when this projects comes handy: you need to navigate through the sibling tags:

You need that a click on ```Click here 1``` to return ```Title 1```; a click on ```Click here 2``` to return ```Title 2```, and so on.

---
<br><br>

## Function description
---

<br>

### 1) getOrderedSiblingTags( <b>tagElement</b>, <b>s</b>='both' <b>)</b>

<br>

This function takes as its first argument an <b>HTML tag</b>, and as its second argument a parameter: <b>'previous'</b>, <b>'next'</b> or <b>'both'</b>.

<b>getOrderedSiblingTags</b> returns and object that contains the tag itself and its siblings, as well as two other functions when the parameter <b>'both'</b> is received:

```
{
  tag: #1,
  siblings: {
    next: #2,
    previous: #3
  },
  toArray: #4,
  tagPosition: #5
}
```

```#1:``` contains the tag received as argument<br>
```#2:``` if <b>'both'</b> or <b>'next'</b> is passed as second argument, it will contain all the tags after the <b>HTML tag</b> received as first argument, as an array<br>
```#3:``` if <b>'both'</b> or <b>'previous'</b> is passed as second argument, it will contain all the tags before the <b>HTML tag</b> received as first argument, as an array<br>
```#4:``` if <b>'both'</b> is passed as second argument, this <b>function</b> will be available and will return all the sibling tags as an array; the <b>HTML tag</b> received as first argument will be into the correct position inside the array<br>
```#5:``` if <b>'both'</b> is passed as second argument, this <b>function</b> will be available and will return the tag's position in 'toArray', allowing you to access it easily<br>

---

<br>

### 2. findFirstPreviousSiblingTag

<br>



---

<br>

### 3. findFirstPreviousTag

<br>



---

<br>

### 4. findFirstNextSiblingTag

<br>



---

<br>

### 5. findFirstNextTag

<br>


