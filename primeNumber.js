function checkPrimeNumber(num) {
   if(num<=1) {
     return false;
   }
   for(let i=2;i < num;i++) {
      if(num%i == 0) {
	     return false;
	  }
   }
   return true;
}
let num=11;
let result=  checkPrimeNumber(num);
console.log('result', result); //output : true