const joinUniqueElementsFromArrsExcludingArrays = (...arrArr) => {
  if (!arrArr.length) return new Array;
  const joinedArrs = new Array;
  for (let arr of arrArr) {
    for (let item of arr) {
       !Array.isArray(item) && !joinedArrs.includes(item) && joinedArrs.push(item)
     }
  }
  return joinedArrs;
}

export default joinUniqueElementsFromArrsExcludingArrays;
