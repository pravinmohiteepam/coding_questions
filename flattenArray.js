const flatten=function(arr,result=[]) {
	 for(let i=0;i<arr.length;i++) {
	   if(Array.isArray(arr[i])) {
		  flatten(arr[i],result)
	   }
	   else  {
		 result.push(arr[i]);
	   }
	 }
	 return result;
 }
 
 let arr=[1,2,[5,3,4,[7,8,9,[10,11]]]];
 console.log(flatten(arr)); // output: [1,2,5,3,4,7,8,9,10,11]