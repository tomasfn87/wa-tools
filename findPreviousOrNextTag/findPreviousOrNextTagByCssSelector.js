import getOrderedSiblingTags from "./getOrderedSiblingTags"

export const findFirstPreviousTagByCssSelector = (tagElement, cssSelector, levelsUp) => {
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
        return null
    } else {
        return findFirstPreviousSiblingTagByCssSelector(tagElement, cssSelector)
    }
}

export const findFirstPreviousSiblingTagByCssSelector = (tagElement, cssSelector) => {
    let s = getOrderedSiblingTags(tagElement, 'previous')
    if (s.siblings.previous) {
        for (let tag of s.siblings.previous.reverse()) {
            if (tag.matches(cssSelector)) {
                return tag
            }
        }
    }
    return null
}

export const findFirstNextTagByCssSelector = (tagElement, cssSelector, levelsUp) => {
    if (!findFirstNextSiblingTagByCssSelector(tagElement, cssSelector)) {
        c = 0
        while (c <= levelsUp && tagElement.parentNode) {
            if (findFirstNextSiblingTagByCssSelector(tagElement, cssSelector)) {
                return findFirstNextSiblingTagByCssSelector(tagElement, cssSelector)
            }
            tagElement = tagElement.parentNode
            if (tagElement.matches(cssSelector)) {
                return tagElement
            }
            c++
        }
        return null
    } else {
        return findFirstNextSiblingTag(tagElement, cssSelector)
    }
}

export const findFirstNextSiblingTagByCssSelector = (tagElement, cssSelector) => {
    let s = getOrderedSiblingTags(tagElement, 'next')
    if (s.siblings.next) {
        for (let tag of s.siblings.next) {
            if (tag.matches(cssSelector)) {
                return tag
            }
        }
    }
    return null
}