/* 
1. Basic Algorithm Scripting: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
convertToF(0) should return a number
convertToF(-30) should return a value of -22
convertToF(0) should return a value of 32
convertToF(20) should return a value of 68
*/

const convertToF = (celsius) => {
  const fahrenheit = (9/5)*celsius+32
  return fahrenheit;
}

const convertToF = (celsius) => (9/5)*celsius+32

/* 
2. Basic Algorithm Scripting: Reverse a String 

Reverse the provided string.
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG"
*/

const reverseString = (str) => {
  str = str.split('').reverse().join('');
  return str;
}

const reverseString = str => str = str.split('').reverse().join('');

/* 
3. Basic Algorithm Scripting: Factorialize a Number

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(0) should return 1.
*/

const factorialize = (num) => {
  if (num === 0) {
    return 1
  }
  return num * factorialize(num - 1)
}

/* 
4. Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
*/

const findLongestWordLength = str => {
  let longestWord = 0;
  const newStr = str.split(' ');
  console.log(newStr);
  for (let i=0; i<newStr.length; i++) {
    if (newStr[i].length > longestWord) {
      longestWord = newStr[i].length;
    }
  }
  return longestWord;
}

const findLongestWordLength = str => {
  let longestWord = str.split(' ').reduce(
    (longest, currentWord) => currentWord.length > longest.length ?  currentWord : longest
  , '');
  return longestWord.length
}

/* 
5. Basic Algorithm Scripting: Return Largest Numbers in Arrays 

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
*/

const largestOfFour = arr => {
  const sortedArr = arr.map(subarr => 
    subarr.sort((a,b) => b-a).slice(0,1));
  const newArr = [].concat.apply([], sortedArr);
  return newArr;
}

const largestOfFour = array => array.map(subArray => Math.max.apply(null, subArray));

/*
6. Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
confirmEnding("Bastian", "n") should return true.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/

const confirmEnding = (str, target) => {
  const targetLength = target.length;
  const sliced = str.substr(-targetLength);
  const trueEnd = sliced === target;
  return trueEnd;
}

const confirmEnding = (string, target) => string.endsWith(target)

/* 
7. Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", -2) should return "".
The built-in repeat()-method should not be used
*/

const repeatStringNumTimes = (str, num) => {
  let newStr = '';
  for (i=0; i<num; i++){
    newStr += str
  }
  return newStr;
}

const repeatStringNumTimes = (string, times) => 
  times > 0 ? string.repeat(times) : "";

/* 
8. Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("Absolutely Longer", 2) should return "Ab...".
*/

const truncateString = (str, num) => {
  if (str.length > num) {
    const newStr = str.substr(0,num).concat('...');
    return newStr;
  } else {
    return str;
  }
}

/* 
9. Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

const findElement = (arr, func) => arr.find(func)

/* 
10. Basic Algorithm Scripting: Boo who 

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
*/

const booWho = bool => typeof(bool) === 'boolean'; 

/* 
11. Basic Algorithm Scripting: Title Case a Sentence 

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
*/

const titleCase = str => str
	.split(' ')
	.map(word => {
		const firstLetter = word.substr(0,1).toUpperCase();
		const restLetters = word.substr(1).toLowerCase();
		word = firstLetter.concat(restLetters);
		return word;
	})
	.join(' ')

const titleCase = str => str
	.toLowerCase()
	.split(' ')
	.map(word => word.replace(word[0], word[0].toUpperCase()))
	.join(' ')

/* 
12. Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
*/

const frankenSplice = (arr1, arr2, n) => {
  let newArr = arr2.slice(0); // = [...arr2]
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

const frankenSplice = (arr1, arr2, n) => {
  const beginning = arr2.slice(0,n)
  const ending = arr2.slice(n);
  const newArr = beginning.concat(arr1).concat(ending);
  return newArr;
}

/* 
13. Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/

const bouncer = arr => arr = arr.filter(item => item)
const bouncer = arr => arr = arr.filter(Boolean)

/* 
14. Basic Algorithm Scripting: Where do I Belong

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/

const getIndexToIns = (arr, num) => {
  const newArr = arr.sort((a,b) => a-b);
  for(let i=0; i<newArr.length; i++) {
    if (newArr[i] >= num) {
      return i;
    }
  }
}

const getIndexToIns = (arr, num) => {
  arr.push(num);
  arr.sort((a, b)=> a-b);
  return arr.indexOf(num);
}

/* 
15. Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Alien", "line"]) should return true.
*/

const mutation = arr => {
  const newArr = arr.map(word => word.toLowerCase());
  const firstWord = newArr[0];
  const secondWord = newArr[1];
  for (let i=0; i<secondWord.length; i++) {
    const containsLetter = firstWord.includes(secondWord[i]);
    if (!containsLetter) {
      return false;
    }
  }
  return true;
}

const mutation = arr => arr[1]
  .toLowerCase()
  .split('')
  .every(letter => arr[0]
    .toLowerCase()
    .indexOf(letter) !== -1
  )

/* 
16. Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
*/

const chunkArrayInGroups = (arr, size) => {
  let newArr = [];
  for (let i=0; i<arr.length/size; i++) {
    const chunk = arr.slice(i*size,i*size+size);
    newArr = [...newArr, chunk];
  };
  return newArr;
}

/* 
17. Intermediate Algorithm Scripting: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

const sumAll = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

/* 
18. Intermediate Algorithm Scripting: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

const diffArray = (arr1, arr2) => {
  let newArr = [];
  const onlyInFirst = (testArr, baseArr) => {
    testArr.map(item => {
    const includes = baseArr.includes(item);
    newArr = includes ? [...newArr] : [...newArr, item]
    })
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;
}

const diffArray = (arr1, arr2) => arr1
  .concat(arr2)
  .filter(
    item => !arr1.includes(item) || !arr2.includes(item)
  )

/* 
19. Intermediate Algorithm Scripting: Intermediate Algorithm Scripting: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
*/

const destroyer = (arr, ...arguments) => {
  arguments.map(arg => {
  arr = arr.filter(item => arg !== item)
 })
 return arr;
}

/* 
20. Intermediate Algorithm Scripting: Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }]
*/

const whatIsInAName = (collection, source) => {
  let arr = [];
  const srcKeys = Object.keys(source);
  arr = collection.filter(obj => srcKeys
    .every(key => obj
      .hasOwnProperty(key) && (obj[key] === source[key])
    )
  )
  return arr;
};

/* 
21. Intermediate Algorithm Scripting: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"
spinalCase("AllThe-small Things") should return "all-the-small-things"
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"
*/

const spinalCase = str => str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

/* 
24. Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
*/

const pairElement = str => {
  const pairingElement = elem => {
    switch (elem) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';	
      case 'G':
        return 'C';
    }
  }
  return str
    .split('')
    .map(letter => [letter, pairingElement(letter)]);
}

const pairElement = str => {
  const mapping = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  return str
    .split('')
    .map(letter => [letter, mapping[letter]]);
}

/* 
26. Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

const uniteUnique = (...arrays) => {
  let newArr = [];
  const allInOne = []
    .concat(...arrays)
    .map(value => 
      newArr = newArr.includes(value) ? [...newArr] : [...newArr, value]
    )
  return newArr;
}

const uniteUnique = (...arrays) => [...new Set([].concat(...arrays))];

/* 
27. Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
*/

const convertHTML = str => str
  .replace(/&/g,'&​amp;')
  .replace(/</g,'&​lt;')
  .replace(/>/g,'&​gt;')
  .replace(/"/g,'&​quot;')
  .replace(/'/g,'&​apos;')
	
const convertHTML = str => {
  const htmlEntitiesMap = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  str = str
    .split('')
    .map(entity => htmlEntitiesMap[entity] || entity)
    .join('');
  return str;
}

/* 
28. Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
sumFibs(1) should return a number.
sumFibs(4) should return 5.
sumFibs(1000) should return 1785.
*/

const sumFibs = num => {
  let fibb = [0,1,1]
  let current = 0;
  while (current <= num) {
    current = fibb[fibb.length-2] + fibb[fibb.length-1]
    fibb = [...fibb, current]
  }
  let sum = 0;
  fibb.map(value => {
    if (value % 2 === 1 && value <= num) {
      sum += value
    }
  })
  return sum;
}
