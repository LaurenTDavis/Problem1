var firstReverse = function(str) {
	var value = '';
	for (var i = str.length-1; i >= 0; i--) {
		value += str[i]
	}
	return value;
}

console.log(firstReverse('Hello'));

var swapCase = function(str) {
	var value = ''; 
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			 value += str[i].toLowerCase();
		}
		else {
			value += str[i].toUpperCase();
		}
	}
	return value;
}

console.log(swapCase("Hello World"));

// Letter Count Function 


var values = function(obj) {
	var arr1 = [];  
	for (var key in obj) {
		arr1.push(obj[key]);
	}	
	return arr1; 
}


var count = function(arr) {
	var obj1 = {};
	for (var i = 0; i < arr.length; i++ ) {
		var item = arr[i];
		if (item in obj1) {
			obj1[item] = 0; 
		}
		obj1[item]++;
	}
	return obj1; 
}

var repeated = function(word) {
	var hits = values(count(word))

}	

var letterCount = function(str) {

	values();
	count(); 
	repeated(); 


}

console.log(letterCount('Today, is the greatest day ever!'))


