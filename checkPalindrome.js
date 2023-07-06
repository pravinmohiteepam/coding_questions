function palindrome(str)
  {
    var flag=0;
     for(var i=0,j=str.length-1;i<(str.length/2)&&j>0; i++,j--)
     {
	    if(str[i]!=str[j])
		  flag=1;
		  
	 }
	 if(flag==1)
	   console.log("string "+str+" is not a palindrome");
	  else
       console.log("string "+str+" is a palindrome");	
  }
  palindrome("malayalam"); //string malayalam is a palindrome
  palindrome("malaam"); //string malaam is not a palindrome