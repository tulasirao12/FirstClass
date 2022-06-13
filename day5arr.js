function peelOfOuterLayer(arr){
    function helper(arr){
        arr.shift();
        arr.pop();
        return arr;
    }
    let newArr=helper(arr);
    for(let i=0;i<newArr.length;i++){
        newArr[i]=helper(newArr[i])
    }
    return newArr;
}
let arr = [["a", "b", "c", "d"],
["e", "f", "g", "h"],
["i", "j", "k", "l"],
["m", "n", "o", "p"]];
console.log(peelOfOuterLayer(arr));