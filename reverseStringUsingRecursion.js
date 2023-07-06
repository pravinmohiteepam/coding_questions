function reverse(str) {
  if(str == '') { 
    return '';
  }
  else {  
  lastIndex= str.length-1;
  return str[lastIndex]+ reverse(str.substring(0,lastIndex));
  }
}

let str = 'test'
let result = reverse(str);
console.log('result', result); //output:  tset