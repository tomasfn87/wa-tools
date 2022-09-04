const joinUniqueElementsFromArrs = (...arrArr) => {
  if (arrArr.length < 1) return new Array;
  const joinedArrs = new Array;
  for (let arr of arrArr) {
    for (let item of arr) {
      !joinedArrs.includes(item) && joinedArrs.push(item);
    }
  }
  return joinedArrs
};

export default joinUniqueElementsFromArrs;
