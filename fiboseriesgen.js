function fib(f1,f2,n){
    let n1=[];
    n1.push(f1)
    n1.push(f2)
    for(i=3;i<=n;i++){
        let f3=f1+f2
        n1.push(f3)
        f1=f2
        f2=f3
    }
  console.log(n1)
}
let f1=0
let f2=1
let n=5
fib(f1,f2,n)