const diamond = function(n) {
	if (n % 2 === 0 ) {	
		n = n + 1 
	} 
	//function for drawing current row
	const row = function(space,star) {
		let str = "" ;
		for (let i=1; i<=space; i++) {
			str += " ";
		}
		for (let j=1; j<=star; j++) {
			str += "*";
		}
		return str; 
	}
	let m = (n+1)/2     //middle row of diamond 
	let spaceqtt= m-1;  //space quantity 
	let starqtt = 1;    //star quantity 
	for (let j=1; j<=n; j++){
		console.log(row(spaceqtt,starqtt));
		if (j<m) {
			spaceqtt--;
			starqtt +=2;
		} 
		else {
			spaceqtt++;
			starqtt -=2;
		}
	}
}

diamond(15);