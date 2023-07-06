function checkPalindromeForAnagram(str) {
  const exists={};
  let oddCount=0;
  for(let i=0;i<str.length;i++) {
    if(exists[str[i]]) {
	   exists[str[i]]++;
	}
	else {
	   exists[str[i]]=1;
	}
  }
  
  for(let key in exists) {
     if(exists[key]%2!==0) {
	   oddCount++;
	 }
  }
  if((str.length%2==0 && oddCount ==0) || (str.length%2!==0 && oddCount == 1)) {
    return true;
  }
  else {
    return false;
  }
}
let str = 'adamm';
let str2= 'caat';
let result = checkPalindromeForAnagram(str);
let result2 = checkPalindromeForAnagram(str2)
console.log('result', result); //result will be true as rearranging adamm can be made as madam which is a palindrome
console.log('result2', result2); //result will be false as rearranging caat cant be made as palindrome