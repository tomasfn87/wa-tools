import getOrderedSiblingTags from "./get Ordered Sibling Tags"


const findFirstPreviousTagByCssSelector = (tagElement, cssSelector, levelsUp) => {
    if (!findFirstPreviousSiblingTagByCssSelector(tagElement, cssSelector)) {
        c = 0
        while (c <= levelsUp && tagElement.parentNode) {
            if (findFirstPreviousSiblingTagByCssSelector(tagElement, cssSelector)) {
                return findFirstPreviousSiblingTagByCssSelector(tagElement, cssSelector)
            }
            tagElement = tagElement.parentNode
            if (tagElement.matches(cssSelector)) {
                return tagElement
            }
            c++
        }
    } else {
        return findFirstPreviousSiblingTagByCssSelector(tagElement, cssSelector)
    }
}

const findFirstPreviousSiblingTagByCssSelector = (tagElement, cssSelector) => {
    let s = getOrderedSiblingTags(tagElement, 'previous')
    if (s.siblings.previous) {
        for (let tag of s.siblings.previous.reverse()) {
            if (tag.matches(cssSelector)) {
                return tag
            }
        }
    }
}

const findFirstNextTagByCssSelector = (tagElement, cssSelector, levelsUp) => {
    if (!findFirstNextSiblingTag(tagElement, cssSelector)) {
        c = 0
        while (c <= levelsUp && tagElement.parentNode) {
            if (findFirstNextSiblingTag(tagElement, cssSelector)) {
                return findFirstNextSiblingTag(tagElement, cssSelector)
            }
            tagElement = tagElement.parentNode
            if (tagElement.matches(cssSelector)) {
                return tagElement
            }
            c++
        }
    } else {
        return findFirstNextSiblingTag(tagElement, cssSelector)
    }
}

const findFirstNextSiblingTagByCssSelector = (tagElement, cssSelector) => {
    let s = getOrderedSiblingTags(tagElement, 'next')
    if (s.siblings.next) {
        for (let tag of s.siblings.next) {
            if (tag.matches(cssSelector)) {
                return tag
            }
        }
    }
}
