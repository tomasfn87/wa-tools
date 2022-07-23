const getOrderedSiblingTags = (tagElement) => {
    // Main object
    let orderedSiblings = {
        tag: tagElement, 
        siblings: {
            previous: [],
            next: [] 
        }
    }
    // Previous siblings
    if (tagElement.previousElementSibling) {
        currentTag = tagElement
        while (currentTag.previousElementSibling) {
            orderedSiblings.siblings.previous.unshift(currentTag.previousElementSibling)
            currentTag = currentTag.previousElementSibling
        }
    }
    // Next siblings
    if (tagElement.nextElementSibling) {
        currentTag = tagElement
        while (currentTag.nextElementSibling) {
            orderedSiblings.siblings.next.push(currentTag.nextElementSibling)
            currentTag = currentTag.nextElementSibling
        }
    }
    // Adding Ordered siblings array to main object
    orderedSiblings.toArray = (() => {
        a = orderedSiblings.siblings.previous.slice()
        a.push(orderedSiblings.tag)
        return a.concat(orderedSiblings.siblings.next.slice())
    })()
    // Adding tagElement position in the Ordered siblings array to main object
    let tagPosition = orderedSiblings.siblings.previous.length
    orderedSiblings.tagPosition = (() => tagPosition)()
    return orderedSiblings
}

export default getOrderedSiblingTags