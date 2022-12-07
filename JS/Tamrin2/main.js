let unFlattedArray = [10, [25, 13], [14, [55], 2]];

function flatArray(arr) {
  if(!Array.isArray(arr) || arr.length===0){
    return "!Invalid Input";
  }
  let flag = arr.some((item) => Array.isArray(item));
  while (flag) {
    arr = [].concat(...arr);
    flag = flag = arr.some((item) => Array.isArray(item));
  }
  return arr;
}
console.log(flatArray(unFlattedArray));
console.log(flatArray([]));

