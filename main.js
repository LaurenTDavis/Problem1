// var firstReverse = function(str) {
// 	var value = '';
// 	for (var i = str.length-1; i >= 0; i--) {
// 		value += str[i]
// 	}
// 	return value;
// }

// console.log(firstReverse('Hello'));

// var swapCase = function(str) {
// 	var value = ''; 
// 	for (var i = 0; i < str.length; i++) {
// 		if (str[i] === str[i].toUpperCase()) {
// 			 value += str[i].toLowerCase();
// 		}
// 		else {
// 			value += str[i].toUpperCase();
// 		}
// 	}
// 	return value;
// }

// console.log(swapCase("Hello World"));

// lettercount = function(x){
//     var array = x.split(" ")
//     var maxletters = 0;
//     for (var i=0; i<array.length; i++){  // once for each word
//         lettercounter = 0;
//         // console.log("new word")
//                 for(j=0; j<array[i].length;j++){  // once for each letter in each word
//                         for(k=0; k<j;k++){  //once for each letter in each word
//                 // console.log(array[i][j])
//                 // console.log(array[i][k])
//                 // console.log("-----------")
//                 if (array[i][j]===array[i][k]){  // if each letter is the same 
//                 lettercounter++
//                 console.log(lettercounter)}
//                 if (lettercounter > maxletters){
//                     maxletters = lettercounter
//                     var mostletters = array[i]
//                 }
//             }
//         }
//     }
// console.log(mostletters)
// }
// lettercount("Today, is the greatest day ever!")



// var palindrome = function(str) {
// 	for ( var i = 0; i < str.length/2; i++ ) {
// 		if (str[i] !== str[str.length-1-i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }


// var dashInsert = function(num) {
// 	var newNum = num.toString();
// 	var isOdd = function(x) {
// 		return x % 2 === 1; 
// 	};
// 	var result = newNum[0];
// 	var foundOdd = isOdd(newNum[0]);

// 	for (var i = 0; i < newNum.length; i++) {
// 		if(isOdd(newNum[i])) {

// 			if(foundOdd) {
// 				result += '-';
// 			}	
// 			else {
// 				foundOdd = true; 
// 			}
// 		}
// 		else {
// 			foundOdd = false; 
// 		}
// 		result += newNum[i];
// 	}	
// 	return result;
// }



var caesarCipher = function(str, num) {
	var result = "";
	for ( var i = 0; i < str.length; i++) {
		var text = str.charCodeAt(i);
		if (text >= 65 && text <= 90) {
			result += String.fromCharCode((text - 65 + num) % 26 + 65)
		}
		else if (text >= 97 && text <= 122) {
			result += String.fromCharCode((text - 97 + num) % 26 + 97)
		}
		else {
			result += str.charAt(i);
		}
	}
	return result;
}

































