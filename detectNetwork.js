// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// input: a string of number
// output: network company in a string of the card type
// Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // find first two numbers
  // finding length

  // Visa and Mastercard:
// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.


var detectNetwork = function(cardNumber) {
  // put 1st and 2nd string in number inside 1 var
  var number = parseInt(cardNumber.slice(0,2));
  var firstNum = parseInt(cardNumber.slice(0,1));
  var firstTwoNums = parseInt(cardNumber.slice(0,2));
  var firstFourNums = parseInt(cardNumber.slice(0,4));
  var firstThreeNums = parseInt(cardNumber.slice(0,3));
  var firstSixNums = parseInt(cardNumber.slice(0,6));
  // compare number with network prefixes
    // if finds a match with network prefix then check length
  var cardLength = cardNumber.length;
    if(number === 34 || number === 37) {
       // if length matches
       if(cardLength === 15) {
          return "American Express";
       }
    } else if (number === 38 || number === 39) {
    	if(cardLength === 14) {
    		return "Diner's Club";
    	}
    } else if(firstNum === 4 && firstTwoNums !== 49) {

    	if(cardLength === 13 || cardLength === 16 || cardLength === 19) {
    		return "Visa";
    	}
    } else if(isMasterCard(number)){
    	if(cardLength === 16) {
    		return "MasterCard";
    	}
    } else if(number === 65 || 6011 === firstFourNums || isDiscover(firstThreeNums)){
    	if(cardLength === 16 || cardLength === 19) {
    		return 'Discover';
    	}
    } else if(firstFourNums === 5018 || firstFourNums === 5020 || firstFourNums === 5038 || firstFourNums === 6304){
    	if(isMaestroCardLength(cardLength)) {
    		return 'Maestro';
    	}
    } else if(isChina(firstThreeNums) || isChina(firstFourNums) || isChina(firstSixNums)){
    	if(isChinaLength(cardLength)) {
    		return 'China UnionPay';
    	}
    } else if(isSwitch(firstFourNums) || isSwitch(firstSixNums)){
    	if(cardLength == 18 || cardLength == 16 || cardLength == 19) {
    		return 'Switch';
    	}
    }
    return null;
};

function isSwitch(nums) {
	if(nums == '633110'){
		return true;
	}
	if(nums == '564182'){
		return true;
	}
	var switchPrefixes = ['4903', '4905', '4911', '4936', '6333', '6759'];
	for(var i = 0; i < switchPrefixes.length; i++){
		// console.log(nums);
		if(nums == switchPrefixes[i]) {

			return true;
		}
	}
	return false;
}

function isChinaLength(cardLength) {
	for(var i = 16; i < 20; i++){
		if(cardLength === i){
			return true;
		}
	}
	return false;
}

function isChina(nums){
	for(var i = 624; i <= 626; i++){
		if(nums === i) {
			return true;
		}
	}
	for(var i = 6282; i <= 6288; i++){
		if(nums === i){
			return true;
		}
	}
	for(var i = 622126; i <= 622925; i++){
		if(nums === i){
			return true;
		}
	}
	return false;
}


function isMaestroCardLength(cardLength) {
	for(var i = 12; i < 20; i++){
		if(cardLength === i) {
			return true;
		}
	}
	return false;
}

function isDiscover(number) {
	for(var i = 644; i < 650; i++) {
		if(number === i) {
			return true;
		}
	}
	return false;
}

function isMasterCard(number) {
	for(var i = 51; i < 56; i++) {
		if(number === i) {
			return true;
		}
	}
	return false;
}


