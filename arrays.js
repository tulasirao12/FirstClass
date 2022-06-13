function peelOfOuterLayer(arr, n) {
    let c = [];
    let b = [];
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {

            if (i != 0 && j != 0 && j != n - 1 && i != n - 1) {
                b.push(arr[i][j]);
            }
            
        }
        c.push(b[i]);
    }
    
    arr.splice(0,4);
    arr.push(c)
    return arr;


}

let arr = [["a", "b", "c", "d"],
["e", "f", "g", "h"],
["i", "j", "k", "l"],
["m", "n", "o", "p"]];
let n = 4;
console.log(peelOfOuterLayer(arr, n));