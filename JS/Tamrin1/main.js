function arrayDepth(arr) {
  if(!Array.isArray(arr) || arr.length===0 ){
    return "!Invalid Input";
  }
  let depth = 0;
  let flag = true;
  while (flag) {
    depth++;
    flag = arr.some((item) => Array.isArray(item));
    arr = arr.flat();
  }
  return depth;
}

let y = [2, [3], [[[[5]]]]];
console.log(arrayDepth(y));
console.log(arrayDepth([]));

