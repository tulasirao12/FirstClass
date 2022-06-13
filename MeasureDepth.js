
function measureDepth(ar){
    if(ar[0]==undefined)
    return 1;
    return 1+measureDepth(... ar)
}
let testArray=[[[[]]]];
console.log(measureDepth(testArray));