function maxCount(arr) {
  let maxCount = 0;
  let currentCount=0;
  for(let i=0;i<arr.length;i++) {
     if(arr[i]==1) {
	   currentCount += 1;
	   maxCount = Math.max(currentCount, maxCount);
	 }
	 else {
	   currentCount = 0;
	 }
  }
  return maxCount;
}

let arr = [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1];
let result = maxCount(arr);
console.log('result', result); //output:  3