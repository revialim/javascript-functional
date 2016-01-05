function repeat(operation, num) {
    // SOLUTION GOES HERE
    var times = num;
	while(times>0){
		operation();
		times = times -1;
	}
}
    
    // Do not remove the line below
module.exports = repeat