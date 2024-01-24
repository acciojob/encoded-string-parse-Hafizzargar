const parseCode = (str) => {
  // your code here
	 let arr=str.split("0");
  // console.log(arr);
  let a1=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=""){
      a1.push(arr[i]);
    }
  }
   // console.log(a1);
  let obj={
    firstname:a1[0],
    lastname:a1[1],
    id:a1[2]


  }
  return obj;
	
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
