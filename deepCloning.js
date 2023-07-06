function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  const clonedObj = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  
  return clonedObj;
}

  let obj ={
    name:'pravin',
	addr:{
	  city:'pune',
	  state:'maharashtra'
	}
  }
  let result=deepClone(obj);
  console.log(result); // cloned object