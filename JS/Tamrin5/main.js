let myArray=["a-b-c-d","a-b-f-g","m-n-l-k","m-o-p-j","v-q-w-e","x-z-p-j"];




function GroupByPlace(arr){
    if(arr.length===0 || !Array.isArray(arr)){
        return "!Invalid Input"
    }
    let splitedLetters= arr.map(item=>item.split("-"));
let lengthOfItems= splitedLetters[0].length;
let result=[];
for(let i=0; i<lengthOfItems; i++){
    let temp=[];
    for(item of splitedLetters){
        if(!temp.includes(item[i])){
            temp.push(item[i]);
        }
        
    }
    result.push(temp);
}
return result;

}
console.log(GroupByPlace(myArray));
