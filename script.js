
function stringChop(str, size) {
  // your code here
	let arr = [];
	if(str==null) return arr

	
  for(let i = 0;i<str.length;i = i +size){
     arr.push(str.substring(i,i+size));
  }
	

  return arr;
}


// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
