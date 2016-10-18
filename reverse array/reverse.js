const normalArray = [1, 2, 3, 4, 5, 6, 7];
//Function for reversing Array
const reverse = function(arr) {
	let a = new Array; 
	for(let i = arr.length-1; i>=0; i--) {
		a.push(arr[i]);
	}
	return a
};
console.log(reverse(normalArray));