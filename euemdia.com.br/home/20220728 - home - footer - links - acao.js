function () {
    var ce = {{Click Element}};
    var findFirstPreviousTag = function (tagElement, tagName, levelsUp) {
        if (!findFirstPreviousSiblingTag(tagElement, tagName)) {
            c = 0;
            while (c <= levelsUp && tagElement.parentNode) {
                if (findFirstPreviousSiblingTag(tagElement, tagName)) {
                    return findFirstPreviousSiblingTag(tagElement, tagName);
                }
                tagElement = tagElement.parentNode;
                c++;
            }
        }
        else {
            return findFirstPreviousSiblingTag(tagElement, tagName);
        }
    };
    var findFirstPreviousSiblingTag = function (tagElement, tagName) {
        var s = (0, getOrderedSiblingTags)(tagElement, 'previous');
        if (s.siblings.previous) {
            for (var _i = 0, _a = s.siblings.previous.reverse(); _i < _a.length; _i++) {
                var tag = _a[_i];
                if (tag.tagName.toLowerCase() == tagName.toLowerCase()) {
                    return tag;
                }
            }
        }
    };
    var getOrderedSiblingTags = function (tagElement, s) {
        if (s === void 0) {
            s = 'both';
        }
        var orderedSiblings = {
            tag: tagElement,
            siblings: {}
        };
        var sCheck = ['both', 'previous'];
        if (!sCheck.includes(s)) {
            s = 'both';
        }
        if ((s == 'both' || s == 'previous') && tagElement.previousElementSibling) {
            orderedSiblings.siblings.previous = [];
            currentTag = tagElement;
            while (currentTag.previousElementSibling) {
                orderedSiblings.siblings.previous.unshift(currentTag.previousElementSibling);
                currentTag = currentTag.previousElementSibling;
            }
        }
        return orderedSiblings;
    };
    return findFirstPreviousTag(ce, 'h6', 2).innerText;
}