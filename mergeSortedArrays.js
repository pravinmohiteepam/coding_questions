function mergeSortedArrays(x, y){
  var i=0,j=0,result=[];
  while(i<x.length && j<y.length) {
      if(x[i]<y[j]) {
        result.push(x[i]);
        i++;
      }    
      else if(x[i]>y[j]) {
          result.push(y[j]);
          j++
      }
	  else {
	    result.push(x[i]);
		i++;
		j++;
	  }
  }
  while(i<x.length) {
    result.push(x[i])
	i++;
  }
  while(j<y.length)
  {
    result.push(y[j]);
	j++;
  }
  return result;
}

let arr1= [1,3,5];
let arr2=[2,4,8];
let result = mergeSortedArrays(arr1,arr2);
console.log('result', result); //output : [1,2,3,4,5,8]