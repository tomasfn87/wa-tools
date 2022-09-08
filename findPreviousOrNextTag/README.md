# findPreviousOrNextTag

<br>

## Application

<br>

This script is meant to help when working with <b>Web Tracking</b> (specially with <a href="https://tagmanager.google.com">Google Tag Manager</a>) and you have groups of repeated elements all inside a mother tag, that may be a ```<div>``` or a ```<section>```, for example.

You cannot use the ```parentNode``` or ```parentElement``` JavaScript method, because the tags are siblings: they are all inside the same mother tag.

---

<br><br>

### 1) When not to use

<br>

<i>The elements are clearly grouped; they're wrapped by different mother tags, that allow a</i> ```querySelector``` <i>method to do the job</i>.

<b>Example</b> - each group is wrapped in a ```<div>```: you have to access the closest ```<h1>``` content from a click on one of the ```<a>``` tags:

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

You want your tag to tell the user "<i>this click is under this title</i>" (the closest ```<h1>```'s content upwards). So, a click on ```Click here 1``` would be related to ```Title 1```, a click on ```Click here 2``` to ```Title 2```, and so on.

<br>

The code below is a <a href="https://tagmanager.google.com">Google Tag Manager</a> custom JavaScript variable that is doing the job described above: it will correlate a click on a ```<a>``` with the ```<h1>```'s content under the same ```<div>```:


<br>

Content of ```myVariable```:
```
function () {
  return {{Click Element}}.parentNode.parentNode.querySelector('h1').innerText;
}
```

<i>The way to follow is clear here</i>: you just have to go up two elements and then use the ```querySelector``` method: the first ```parentNode``` will point to the ```<p>``` tag; the second ```parentNode``` will point to the ```<div>``` tag and then the ```querySelector('h1')``` will point to the first ```<h1>``` tag.

<br>

```{{myVariable}}``` is how you access it from another custom JavaScript variable or from a custom HTML tag, or to use its output as a tag's parameter value.

```{{Click Element}}``` is one of <a href="https://tagmanager.google.com">Google Tag Manager</a>'s most useful default variables. It returns the clicked (or touched) element <b>HTML tag</b>, allowing you to manipulate and navigate through its siblings, children and parent tags, like this project's <b>functions</b> do.

---

<br><br>

### 2) When to use

<br>

<i>The elements are not clearly grouped, because they're wrapped by only one mother tag.</i>

<b>Example</b> - the groups are all inside a mother tag (```<div>```):

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

You need to reference a ```<h1>``` value from a click on one of the ```<a>```, but, if you use the method described in 1), you will always get the first ```<h1>```.

<br>

You need that a click on ```Click here 1``` to return ```Title 1```; a click on ```Click here 2``` to return ```Title 2```, and so on.

But, in this case, applying the ```querySelector``` method on the parent ```<div>``` wouldn't work: it would always return ```Title 1```, because there's a single mother ```<div>``` wrapping all the ```<h1>``` / ```<p>``` pairs.

You want the closest ```<h1>``` sibling tag upwards, in this case.

<br>

That's when this project comes in handy: you need to navigate through the sibling tags, meaning you don't want to access the tag's parent tag, but you want to search through its closest brothers, both upwards or downards, and, only then, go one level up, if a tag with the name you specified is not present.

---
<br><br>

# Function description

<br>

## 1) getOrderedSiblingTags( tagElement, s = 'both')

<br>

### This is the base function, and it's called by functions 2) to 5), directly or indirectly, and it's <i>not</i> meant to be used by itself.

<br>

It takes as its first argument an <b>HTML tag</b>, and, as its second argument a parameter: <b>'previous'</b>, <b>'next'</b> or <b>'both'</b>.

<b>getOrderedSiblingTags</b> returns an object that contains the <b>HTML tag</b> received as argument itself and all of its siblings splitted in two arrays, <b>'previous'</b> and <b>'next'</b>. It can also output two side functions (when the parameter <b>'both'</b> is received), <b>'toArray'</b> and <b>'tagPosition'</b>, that return all the sibling tags as an array and the <b>HTML tag</b> received as argument's position in this array, respectively.

```javascript
{
  tag: "#1 (REQUIRED) the HTML tag received as argument",
  siblings: {
    next: "#2 [ ...next ] || []",
    previous: "#3 [ ...previous ] || []"
  },
  toArray: "#4 [ ...previous, tag, ...next ] || [ tag ] || [ ...previous, tag ] || [ tag, ...next ]",
  tagPosition: "#5 - integer (previous.length)"
}
```

```#1:``` contains the tag received as argument by <b>getOrderedSiblingTags</b>;<br>
```#2:``` if <b>'both'</b> or <b>'next'</b> is passed as second argument, it will contain all the tags after the <b>HTML tag</b> received as first argument, as an array;<br>
```#3:``` if <b>'both'</b> or <b>'previous'</b> is passed as second argument, it will contain all the tags before the <b>HTML tag</b> received as first argument, as an array;<br>
```#4:``` if <b>'both'</b> is passed as second argument, this <b>function</b> will be available and will return all the sibling tags as an array; the <b>HTML tag</b> received as first argument will be into the correct position inside the array;<br>
```#5:``` if <b>'both'</b> is passed as second argument, this <b>function</b> will be available and will return the tag's position in 'toArray', allowing you to access it easily.<br>

---

<br>

## 2) findFirstPreviousSiblingTag

<br>



---

<br>

## 3) findFirstPreviousTag

<br>



---

<br>

## 4) findFirstNextSiblingTag

<br>



---

<br>

## 5) findFirstNextTag

<br>


