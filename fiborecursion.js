
function fibrec(n,arr){
    if(arr.length==n){
        return arr;
    }
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return fibrec(n,arr);
}
let a=-1
let b=-1
let n=5
let arr=[a,b]
console.log(fibrec(n,arr))