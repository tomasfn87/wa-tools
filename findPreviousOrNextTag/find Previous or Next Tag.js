import getOrderedSiblingTags from "./20220723 - get Ordered Sibling Tags"


const findFirstPreviousTag = (tagElement, tagName, levelsUp) => {
    if (!findFirstPreviousSiblingTag(tagElement, tagName)) {
        c = 0
        while (c <= levelsUp && tagElement.parentNode) {
            if (findFirstPreviousSiblingTag(tagElement, tagName)) {
                return findFirstPreviousSiblingTag(tagElement, tagName)
            }
            tagElement = tagElement.parentNode
            if (tagElement.tagName.toLowerCase() == tagName.toLowerCase()) {
                return tagElement
            }
            c++
        }
    } else {
        return findFirstPreviousSiblingTag(tagElement, tagName)
    }
}

const findFirstPreviousSiblingTag = (tagElement, tagName) => {
    let s = getOrderedSiblingTags(tagElement, 'previous')
    if (s.siblings.previous) {
        for (let tag of s.siblings.previous.reverse()) {
            if (tag.tagName.toLowerCase() == tagName.toLowerCase()) {
                return tag
            }
        }
    }
}

const findFirstNextTag = (tagElement, tagName, levelsUp) => {
    if (!findFirstNextSiblingTag(tagElement, tagName)) {
        c = 0
        while (c <= levelsUp && tagElement.parentNode) {
            if (findFirstNextSiblingTag(tagElement, tagName)) {
                return findFirstNextSiblingTag(tagElement, tagName)
            }
            tagElement = tagElement.parentNode
            if (tagElement.tagName.toLowerCase() == tagName.toLowerCase()) {
                return tagElement
            }
            c++
        }
    } else {
        return findFirstNextSiblingTag(tagElement, tagName)
    }
}

const findFirstNextSiblingTag = (tagElement, tagName) => {
    let s = getOrderedSiblingTags(tagElement, 'next')
    if (s.siblings.next) {
        for (let tag of s.siblings.next) {
            if (tag.tagName.toLowerCase() == tagName.toLowerCase()) {
                return tag
            }
        }
    }
}
