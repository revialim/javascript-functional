function countWords(inputWords) {
      // SOLUTION GOES HERE
    var countedWords = {};
	function addWord(word){
		countedWords[word]=1;
		/*
		countedWords = { "word" : 1; }
		*/
	}
	/*  notes:
		- check property of obj with obj.hasOwnProperty(property)
		- reduce 
	*/
	reducedWords = inputWords.reduce(
		function(thisWord, something, countedWords){
			if(countedWords.hasOwnProperty(thisWord)){
				countedWords[thisWord]=countedWords[thisWord]+1;//add one to what is already there... 
			}
			else{
				addWord(thisWord);
			}
			return countedWords;
		}
	);
}
    
module.exports = countWords