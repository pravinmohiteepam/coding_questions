function anagram(str1, str2) {
  let existsStr1 = {};
  let existsStr2 ={};
  
  for(let i=0;i<str1.length;i++) {
    if(existsStr1[str1[i]]) {
	  existsStr1[str1[i]]++;
	} else {
	  existsStr1[str1[i]]=1;
	}
  }
  
  for(let i=0;i<str2.length;i++) {
    if(existsStr2[str2[i]]) {
	  existsStr2[str2[i]]++;
	} else {
	  existsStr2[str2[i]]=1;
	}
  }
  
  for(let key in existsStr1) {
    if(existsStr1[key] != existsStr2[key]) {
	  return false;
	}
  }
  return true;
}

let str1 = 'test'
let str2 = 'estt'
let result = anagram(str1, str2);
console.log('result', result); // true