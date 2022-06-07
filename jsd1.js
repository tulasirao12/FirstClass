function sumofEvenandOdd(a){
    var evensum=0
    var oddsum=0
    for(let i=0;i<a.length;i++){
      if(a[i]%2==0){
        evensum+=a[i]
        
      }else{
        oddsum+=a[i]
      }
      
    }
    return[evensum,oddsum]
  }
  var a=[1,2,3,4,5,6,7,8,9,10]
  console.log(sumofEvenandOdd(a))