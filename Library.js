'use strict';
var Library = {
	/*
		Given two strings str1 and str2 of same length (length must never be 0 or negative!),
		the Hamming Distance of those two strings are the number of inversions per character
		need to transform str1 to str2 or vise-versa. Simply put, the Hamming Distance of two
		strings is the number of characters that differ in ith position from position 1 to
		strlen(str1).
	*/
	getHammingDistance: function(string1, string2) {
		// check if string1 and string2 is valid
		if(!string1){
			console.log("["+string1+"] is not a valid string!");
			return null;
		}
		if (!string2) {
			console.log("[" + string2 + "] is not a valid string!");
			return null;
		}
		if (!(string1.length === string2.length)) {
			console.log(string1 + " and " + string2 + " is not equal in length!");
			return null;
		}

		var inversions = 0;
		for (var i = 0, len = string1.length; i < len; i++) {
			if (string1[i] !== string2[i]) {
				inversions += 1;
			}
		}
		return inversions;
	},

	/*
		Given a string original and pattern, we will count the number of occurrence
		of pattern in original.
	*/
	countSubstrPattern: function(original, pattern) {
		if(!original){
			console.log(original + " is not a valid string!");
			return null;
		}
		if (!pattern) {
			console.log(pattern + " is not a valid string!");
			return null;
		}
		var patternLength = pattern.length, occurences = 0;
		for (var i = 0; i < original.length; i++) {
			if(original[i] === pattern[0] && (original.substr(i,patternLength) + "" == pattern + "")){
				occurences += 1;
			}
		}
		return occurences;
	},

	/*
		Given an alphabet string where all letters are assumed to be unique,
		this function returns true if the string str is a valid string based
		on the letters of alphabet.
	*/
	isValidString: function(string, alphabet) {
		if(!string){
			console.log(string + " is not a valid string!");
			return null;
		}
		if (!alphabet) {
			console.log(alphabet + " is not a valid string!");
			return null;
		}
		for (var i = 0; i < string.length; i++) {
			if(!(alphabet.indexOf(string[i]) > -1)){
				return false;
			}
		}
		return true;
	},

	/*
		Given a genome str of some length q (where q>0), it returns the number of
		Gs minus the number of Cs in the first n nucleotides (q>=n). The value can
		be zero,negative or positive. The first position is one (1) not zero(0) as
		we typically associate with string implementations.
	*/
	getSkew: function(genomeString, n) {

	},

	/*
		Given a genome str of some length q (where q>0), it returns the maximum value
		of the number of Gs minus the number of Cs in the first n nucleotides (q>=n).
		The value can be zero, negative or positive. The first position is one (1)
		not zero(0) as we typically associate with string implementations.
	*/
	getMaxSkewN: function(genomeString, n) {

	},

	/*
		Given a genome str of some length q (where q>0), it returns the minimum value
		of the number of Gs minus the number of Cs in the first n nucleotides (q>=n).
		The value can be zero, negative or positive. The first position is one (1) not
		zero(0) as we typically associate with string implementations.
	*/
	getMinSkewN: function(genomeString, n) {

	}
};
