/*
	Author: Michael Arvin Jay C. Braga
	Section: CMSC 128 AB-2L
*/
'use strict';
/*
	Given two strings str1 and str2 of same length (length must never be 0 or negative!),
	the Hamming Distance of those two strings are the number of inversions per character
	need to transform str1 to str2 or vise-versa. Simply put, the Hamming Distance of two
	strings is the number of characters that differ in ith position from position 1 to
	strlen(str1).
*/
function getHammingDistance(string1, string2) {
	// check if string1 is valid
	if(!string1){
		console.log("["+string1+"] is not a valid string!");
		return null;
	}
	// check if string2 is valid
	if (!string2) {
		console.log("[" + string2 + "] is not a valid string!");
		return null;
	}
	// check if strings are equal in length
	if (!(string1.length === string2.length)) {
		console.log(string1 + " and " + string2 + " are not equal in length!");
		return null;
	}
	// compute inversions
	var inversions = 0;
	for (var i = 0, len = string1.length; i < len; i++) {
		if (string1[i] !== string2[i]) {
			inversions += 1;
		}
	}
	return inversions;
}

/*
	Given a string original and pattern, we will count the number of occurrence
	of pattern in original.
*/
function countSubstrPattern(original, pattern) {
	// check if original is valid
	if(!original){
		console.log(original + " is not a valid string!");
		return null;
	}
	// check if pattern is valid
	if (!pattern) {
		console.log(pattern + " is not a valid string!");
		return null;
	}
	// check occurences of the pattern on original
	var patternLength = pattern.length, occurences = 0;
	for (var i = 0; i < original.length; i++) {
		if(original[i] === pattern[0] && (original.substr(i,patternLength) + "" == pattern + "")){
			occurences += 1;
		}
	}
	return occurences;
}

/*
	Given an alphabet string where all letters are assumed to be unique,
	this function returns true if the string str is a valid string based
	on the letters of alphabet.
*/
function isValidString(string, alphabet) {
	// check if string is valid
	if(!string){
		console.log(string + " is not a valid string!");
		return null;
	}
	// check if alphabet is valid
	if (!alphabet) {
		console.log(alphabet + " is not a valid string!");
		return null;
	}
	// check each character of string if existing in alphabet
	for (var i = 0; i < string.length; i++) {
		if(!(alphabet.indexOf(string[i]) > -1)){
			return false;
		}
	}
	return true;
}

/*
	Given a genome str of some length q (where q>0), it returns the number of
	Gs minus the number of Cs in the first n nucleotides (q>=n). The value can
	be zero,negative or positive. The first position is one (1) not zero(0) as
	we typically associate with string implementations.
*/
function getSkew(genomeString, n) {
	// check if genomeString is valid
	if(!genomeString || genomeString.length <= 0){
		console.log(genomeString + " is not a valid string!");
		return null;
	}
	// check if n is valid
	if(n <= 0 || n > genomeString.length){
		console.log(n + " is invalid!");
		return null;
	}
	// compute skew by the occurences of G and C
	var numG = 0, numC = 0;
	for (var i = 0; i < n; i++) {
		switch (genomeString[i]) {
			case 'G':
				numG += 1;
				break;
			case 'C':
				numC += 1;
				break;
		}
	}
	return (numG - numC);
}

/*
	Given a genome str of some length q (where q>0), it returns the maximum value
	of the number of Gs minus the number of Cs in the first n nucleotides (q>=n).
	The value can be zero, negative or positive. The first position is one (1)
	not zero(0) as we typically associate with string implementations.
*/
function getMaxSkewN(genomeString, n) {
	// check if genomeString is valid
	if(!genomeString || genomeString.length <= 0){
		console.log(genomeString + " is not a valid string!");
		return null;
	}
	// check if n is valid
	if(n <= 0 || n > genomeString.length){
		console.log(n + " is invalid!");
		return null;
	}
	// check all skews from 0 - n and get the max value
	var max = getSkew(genomeString, 1);
	for (var i = 2, newSkew; i <= n; i++) {
		if(max < (newSkew = getSkew(genomeString, i))){
			max = newSkew;
		}
	}
	return max;
}
/*
	Given a genome str of some length q (where q>0), it returns the minimum value
	of the number of Gs minus the number of Cs in the first n nucleotides (q>=n).
	The value can be zero, negative or positive. The first position is one (1) not
	zero(0) as we typically associate with string implementations.
*/
function getMinSkewN(genomeString, n) {
	// check if genomeString is valid
	if(!genomeString || genomeString.length <= 0){
		console.log(genomeString + " is not a valid string!");
		return null;
	}
	// check if n is valid
	if(n <= 0 || n > genomeString.length){
		console.log(n + " is invalid!");
		return null;
	}
	// check all skews from 0 - n and get the min value
	var min = getSkew(genomeString, 1);
	for (var i = 2, newSkew; i <= n; i++) {
		if(min > (newSkew = getSkew(genomeString, i))){
			min = newSkew;
		}
	}
	return min;
}
