
function doubleAll(numbers) {
	// SOLUTION GOES HERE
	var doublednums = numbers.map(function(num){
			return num*2;
		});
	return doublednums;
}
    
module.exports = doubleAll

