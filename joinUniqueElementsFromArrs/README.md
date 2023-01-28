# joinUniqueElementsFromArrs

Join Unique Elements From Arrays

<br>

## Download only this project from [`wa-tools`](https://github.com/tomasfn87/wa-tools)

### Using `git` CLI

```shell
git clone --depth 1 --no-checkout https://github.com/tomasfn87/wa-tools ./joinUniqueElementsFromArrs && cd joinUniqueElementsFromArrs && git sparse-checkout set joinUniqueElementsFromArrs && git checkout && mv joinUniqueElementsFromArrs/* . && rm -rf {joinUniqueElementsFromArrs,.git}
```

---

### Using a web browser

1. Go to [Download GitHub Directory](https://download-directory.github.io)
2. Paste the URL below in the input field and press `Enter` to download only this folder instead of the whole `wa-tools` repository

```uri
https://github.com/tomasfn87/wa-tools/tree/main/joinUniqueElementsFromArrs
```

---

<br>

## Tests

### Join Unique Elements From Arrays

#### [`joinUniqueElementsFromArrs`](https://github.com/tomasfn87/wa-tools/blob/main/joinUniqueElementsFromArrs/joinUniqueElementsFromArrs.js)

```
                                                       []  ->  []
                                                    [[1]]  ->  [1]
                                                  [[1,1]]  ->  [1]
                                                  [["a"]]  ->  ["a"]
                                                [[1],[2]]  ->  [1,2]
                                              [["a","a"]]  ->  ["a"]
                                            [[1,2],[1,3]]  ->  [1,2,3]
                                            [[1],[2],[3]]  ->  [1,2,3]
                                          [[null],[null]]  ->  [null]
                                            [["a"],["b"]]  ->  ["a","b"]
                                            [[1,2],[3,4]]  ->  [1,2,3,4]
                                        [[0,null],[null]]  ->  [0,null]
                                      [[1,2,3,4],[4,5,5]]  ->  [1,2,3,4,5]
                                      [["a"],["b"],["c"]]  ->  ["a","b","c"]
                                    [["a","b"],["a","c"]]  ->  ["a","b","c"]
                                     [[true,false,false]]  ->  [true,false]
                                    [["a","b"],["c","d"]]  ->  ["a","b","c","d"]
                                    [[1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                  [[1,1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                [[1,2,3,4],[1,2,3,4,5,6]]  ->  [1,2,3,4,5,6]
                                [[1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[false,false],[true,true]]  ->  [false,true]
                              [[1,1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[1,2,3],[4,4,5,5,5,6,7,7]]  ->  [1,2,3,4,5,6,7]
                          [[1,2,3],[4,4,5],[5,5,6,7,7,8]]  ->  [1,2,3,4,5,6,7,8]
                        [["a","b","c","d"],["d","e","e"]]  ->  ["a","b","c","d","e"]
            [["a","b","c","d"],["a","b","c","d","e","f"]]  ->  ["a","b","c","d","e","f"]
        [["a","b","c"],["d","d","e","e","e","f","g","g"]]  ->  ["a","b","c","d","e","f","g"]
      [["a","b","c"],["d","d","e"],["e","e","f","g","h"]]  ->  ["a","b","c","d","e","f","g","h"]
```

---

<br>

### Join Unique Elements From Arrays Excluding Arrays

#### [`joinUniqueElementsFromArrsExcludingArrays`](https://github.com/tomasfn87/wa-tools/blob/main/joinUniqueElementsFromArrs/joinUniqueElementsFromArrsExcludingArrays.js)

```
                                                       []  ->  []
                                                    [[1]]  ->  [1]
                                                  [[1,1]]  ->  [1]
                                                  [["a"]]  ->  ["a"]
                                                [[1],[2]]  ->  [1,2]
                                              [["a","a"]]  ->  ["a"]
                                            [[1,2],[1,3]]  ->  [1,2,3]
                                            [[1],[2],[3]]  ->  [1,2,3]
                                          [[null],[null]]  ->  [null]
                                            [["a"],["b"]]  ->  ["a","b"]
                                            [[1,2],[3,4]]  ->  [1,2,3,4]
                                        [[0,null],[null]]  ->  [0,null]
                                      [[1,2,3,4],[4,5,5]]  ->  [1,2,3,4,5]
                                      [["a"],["b"],["c"]]  ->  ["a","b","c"]
                                    [["a","b"],["a","c"]]  ->  ["a","b","c"]
                                     [[true,false,false]]  ->  [true,false]
                                    [["a","b"],["c","d"]]  ->  ["a","b","c","d"]
                                    [[1,[0,1,2],[0,1,2]]]  ->  [1]
                                  [[1,1,[0,1,2],[0,1,2]]]  ->  [1]
                                [[1,2,3,4],[1,2,3,4,5,6]]  ->  [1,2,3,4,5,6]
                                [[1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[false,false],[true,true]]  ->  [false,true]
                              [[1,1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[1,2,3],[4,4,5,5,5,6,7,7]]  ->  [1,2,3,4,5,6,7]
                          [[1,2,3],[4,4,5],[5,5,6,7,7,8]]  ->  [1,2,3,4,5,6,7,8]
                        [["a","b","c","d"],["d","e","e"]]  ->  ["a","b","c","d","e"]
            [["a","b","c","d"],["a","b","c","d","e","f"]]  ->  ["a","b","c","d","e","f"]
        [["a","b","c"],["d","d","e","e","e","f","g","g"]]  ->  ["a","b","c","d","e","f","g"]
      [["a","b","c"],["d","d","e"],["e","e","f","g","h"]]  ->  ["a","b","c","d","e","f","g","h"]
```

---

<br>

### Join Unique Elements From Arrays Excluding Null

#### [`joinUniqueElementsFromArrsExcludingNull`](https://github.com/tomasfn87/wa-tools/blob/main/joinUniqueElementsFromArrs/joinUniqueElementsFromArrsExcludingNull.js)

```
                                                       []  ->  []
                                                    [[1]]  ->  [1]
                                                  [[1,1]]  ->  [1]
                                                  [["a"]]  ->  ["a"]
                                                [[1],[2]]  ->  [1,2]
                                              [["a","a"]]  ->  ["a"]
                                          [[null],[null]]  ->  []
                                        [[0,null],[null]]  ->  []
                                            [[1,2],[1,3]]  ->  [1,2,3]
                                            [[1],[2],[3]]  ->  [1,2,3]
                                            [["a"],["b"]]  ->  ["a","b"]
                                            [[1,2],[3,4]]  ->  [1,2,3,4]
                                      [[1,2,3,4],[4,5,5]]  ->  [1,2,3,4,5]
                                      [["a"],["b"],["c"]]  ->  ["a","b","c"]
                                    [["a","b"],["a","c"]]  ->  ["a","b","c"]
                                     [[true,false,false]]  ->  [true]
                                    [["a","b"],["c","d"]]  ->  ["a","b","c","d"]
                                    [[1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                  [[1,1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                [[1,2,3,4],[1,2,3,4,5,6]]  ->  [1,2,3,4,5,6]
                                [[1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[false,false],[true,true]]  ->  [true]
                              [[1,1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[1,2,3],[4,4,5,5,5,6,7,7]]  ->  [1,2,3,4,5,6,7]
                          [[1,2,3],[4,4,5],[5,5,6,7,7,8]]  ->  [1,2,3,4,5,6,7,8]
                        [["a","b","c","d"],["d","e","e"]]  ->  ["a","b","c","d","e"]
            [["a","b","c","d"],["a","b","c","d","e","f"]]  ->  ["a","b","c","d","e","f"]
        [["a","b","c"],["d","d","e","e","e","f","g","g"]]  ->  ["a","b","c","d","e","f","g"]
      [["a","b","c"],["d","d","e"],["e","e","f","g","h"]]  ->  ["a","b","c","d","e","f","g","h"]
```

---

<br>

### Join Unique Elements From Arrays Excluding Objects

#### [`joinUniqueElementsFromArrsExcludingObjects`](https://github.com/tomasfn87/wa-tools/blob/main/joinUniqueElementsFromArrs/joinUniqueElementsFromArrsExcludingObjects.js)

```
                                                       []  ->  []
                                                    [[1]]  ->  [1]
                                                  [[1,1]]  ->  [1]
                                                  [["a"]]  ->  ["a"]
                                                [[1],[2]]  ->  [1,2]
                                              [["a","a"]]  ->  ["a"]
                                            [[1,2],[1,3]]  ->  [1,2,3]
                                            [[1],[2],[3]]  ->  [1,2,3]
                                          [[null],[null]]  ->  []
                                            [["a"],["b"]]  ->  ["a","b"]
                                            [[1,2],[3,4]]  ->  [1,2,3,4]
                                        [[0,null],[null]]  ->  [0]
                                      [[1,2,3,4],[4,5,5]]  ->  [1,2,3,4,5]
                                      [["a"],["b"],["c"]]  ->  ["a","b","c"]
                                    [["a","b"],["a","c"]]  ->  ["a","b","c"]
                                     [[true,false,false]]  ->  [true,false]
                                    [["a","b"],["c","d"]]  ->  ["a","b","c","d"]
                                    [[1,[0,1,2],[0,1,2]]]  ->  [1]
                                  [[1,1,[0,1,2],[0,1,2]]]  ->  [1]
                                [[1,2,3,4],[1,2,3,4,5,6]]  ->  [1,2,3,4,5,6]
                                [[1,{"a":"b"},{"a":"b"}]]  ->  [1]
                              [[false,false],[true,true]]  ->  [false,true]
                              [[1,1,{"a":"b"},{"a":"b"}]]  ->  [1]
                              [[1,2,3],[4,4,5,5,5,6,7,7]]  ->  [1,2,3,4,5,6,7]
                          [[1,2,3],[4,4,5],[5,5,6,7,7,8]]  ->  [1,2,3,4,5,6,7,8]
                        [["a","b","c","d"],["d","e","e"]]  ->  ["a","b","c","d","e"]
            [["a","b","c","d"],["a","b","c","d","e","f"]]  ->  ["a","b","c","d","e","f"]
        [["a","b","c"],["d","d","e","e","e","f","g","g"]]  ->  ["a","b","c","d","e","f","g"]
      [["a","b","c"],["d","d","e"],["e","e","f","g","h"]]  ->  ["a","b","c","d","e","f","g","h"]
```

---

<br>

### Join Unique Elements From Arrays Including Zero Excluding Other Null

#### [`joinUniqueElementsFromArrsIncludingZeroExcludingOtherNull`](https://github.com/tomasfn87/wa-tools/blob/main/joinUniqueElementsFromArrs/joinUniqueElementsFromArrsIncludingZeroExcludingNull.js)

```
                                                       []  ->  []
                                                    [[1]]  ->  [1]
                                                  [[1,1]]  ->  [1]
                                                  [["a"]]  ->  ["a"]
                                                [[1],[2]]  ->  [1,2]
                                              [["a","a"]]  ->  ["a"]
                                          [[null],[null]]  ->  []
                                            [[1,2],[1,3]]  ->  [1,2,3]
                                            [[1],[2],[3]]  ->  [1,2,3]
                                        [[0,null],[null]]  ->  [0]
                                            [["a"],["b"]]  ->  ["a","b"]
                                            [[1,2],[3,4]]  ->  [1,2,3,4]
                                      [[1,2,3,4],[4,5,5]]  ->  [1,2,3,4,5]
                                      [["a"],["b"],["c"]]  ->  ["a","b","c"]
                                    [["a","b"],["a","c"]]  ->  ["a","b","c"]
                                     [[true,false,false]]  ->  [true]
                                    [["a","b"],["c","d"]]  ->  ["a","b","c","d"]
                                    [[1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                  [[1,1,[0,1,2],[0,1,2]]]  ->  [1,[0,1,2],[0,1,2]]
                                [[1,2,3,4],[1,2,3,4,5,6]]  ->  [1,2,3,4,5,6]
                                [[1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[false,false],[true,true]]  ->  [true]
                              [[1,1,{"a":"b"},{"a":"b"}]]  ->  [1,{"a":"b"},{"a":"b"}]
                              [[1,2,3],[4,4,5,5,5,6,7,7]]  ->  [1,2,3,4,5,6,7]
                          [[1,2,3],[4,4,5],[5,5,6,7,7,8]]  ->  [1,2,3,4,5,6,7,8]
                        [["a","b","c","d"],["d","e","e"]]  ->  ["a","b","c","d","e"]
            [["a","b","c","d"],["a","b","c","d","e","f"]]  ->  ["a","b","c","d","e","f"]
        [["a","b","c"],["d","d","e","e","e","f","g","g"]]  ->  ["a","b","c","d","e","f","g"]
      [["a","b","c"],["d","d","e"],["e","e","f","g","h"]]  ->  ["a","b","c","d","e","f","g","h"]
```
