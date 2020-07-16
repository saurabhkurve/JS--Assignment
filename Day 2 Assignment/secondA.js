//Methods of String

let text="We are Indians";

//Substring : Extracts the characters from a string, between two specified indices
let substri=text.substring(text,6);
console.log(substri);

/* replace : Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced */
let res=text.replace("Indians","American");
console.log(res);

//startsWith : Checks whether a string begins with specified characters
let star=text.startsWith("We");
console.log(star);

//endsWith : Checks whether a string ends with specified string/characters
let end=text.endsWith("Indians");
console.log(end);

/* substr : Extracts the characters from a string, beginning at a specified start position, and through the specified number of character */
let subs=text.substr(2,6);   /*1 denotes positon from which word display & 6 denotes how many characters should display
                            from specified position*/
console.log(subs);


//repeat : Returns a new string with a specified number of copies of an existing string
let rep=text.repeat(3);
console.log(rep);

//match : Searches a string for a match against a regular expression, and returns the matches
let mat=text.match(/are/g);
console.log(mat);

//concat : Joins two or more strings, and returns a new joined strings
let str1="LetsUpgrade";
let str2="Essentials";
let conc=str1.concat(str2);
console.log(conc);

//trim : Removes whitespace from both ends of a string
let tri="   Hello world";
console.log(tri.trim());

// includes : Checks whether a string contains the specified string/characters

let incl=text.includes("Indians");
console.log(incl);


//Methods of Array 

let sports=["Cricket","Baseball","Tennis","Football"];

// copywithin :Copies array elements within the array, to and from specified positions

sports.copyWithin(3,0);   /* 3 Denotes position where element will copy (Target) and 0 is the original element(Start) position*/
console.log(sports);

// fill : Fill all the array elements with a static value

  // sports.fill("Hokey");
  //console.log(sports);


// every : Checks if every element in an array pass a test

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.every(checkAdult));


// filter : Creates a new array with every element in an array that pass a test

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult));

// join : Joins all elements of an array into a string

sports.join();
console.log(sports);

// sort : Sorts the elements of an array

sports.sort();
console.log(sports);

// splice : Adds/Removes elements from an array

sports.splice(3,0,"Polo","Throwball");  /* 3 denotes position of word which is to be inserted into an array & 0 denotes how many words to be deleted from position where we will insert elements into an array */
console.log(sports);



