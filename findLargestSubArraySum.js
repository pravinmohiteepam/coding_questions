function maxSubArray(arr){
   let maxSubArray=arr[0];
   let currentSum=0;
   for(let i=0;i < arr.length;i++) {
       if(currentSum<0) {
	     currentSum=0;
	   }
       currentSum += arr[i];
	   maxSubArray = Math.max(currentSum,maxSubArray);
   }   
   return maxSubArray;
}

let arr1=[2,7,-5,6]
let result= maxSubArray(arr1);
console.log('result', result); // output : 10