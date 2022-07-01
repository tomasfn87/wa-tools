for (i of document.querySelectorAll('a')) {
    if (i.href.match(/^\S*youtube.com\S*\/?$/)) {
        console.log(i.href)
    }
}