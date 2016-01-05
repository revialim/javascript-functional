function getShortMessages(messages) {
    // SOLUTION GOES HERE
    var onlyMessages = messages.map(function(messages){
    		return messages.message;
    	}
    );
    var shortMessages = onlyMessages.filter(function(m){
    		if(m.length<50){
    			return m;
    		}	
    	}
    );
    return shortMessages;
}
    
module.exports = getShortMessages

