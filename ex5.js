function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
    	// SOLUTION GOES HERE
		var allGood = false;
		var submittedIDs = submittedUsers.map(function(item){return item.id;});	
		var goodIDs = goodUsers.map(function(item){return item.id;});

		//find a partner in goodIDs for every submitted ID, otherwise return false
		allGood = submittedIDs.every(function(id){
			    	var thisID = id;
					return (
						goodIDs.some(function(goodID){
							return (goodID === thisID);
						})
						);
					});
		return allGood;
	};
}
    
module.exports = checkUsersValid


