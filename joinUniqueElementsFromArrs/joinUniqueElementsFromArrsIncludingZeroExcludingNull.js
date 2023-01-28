const joinUniqueElementsFromArrsIncludingZeroExcludingOtherNull = (...arrArr) => {
    if (!arrArr.length) return new Array;
    const joinedArrs = new Array;
    for (let arr of arrArr) {
        for (let item of arr) {
            item === 0 && !joinedArrs.includes(item) && joinedArrs.push(item);
            !!item && !joinedArrs.includes(item) && joinedArrs.push(item);
        }
    }
    return joinedArrs;
}

export default joinUniqueElementsFromArrsIncludingZeroExcludingOtherNull;
