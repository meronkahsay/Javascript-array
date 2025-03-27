//Find the last element 
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];
console.log(arr1[arr1.length - 1]);
console.log(arr2[arr2.length - 1]);

//Write a JS program that will join the following array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petString = myPets.join();
console.log(petString);

//Write a JS script to sort the following array items
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(arr3.sort((a, b) => (a - b)));

//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let unique = arr.filter((item, index) => arr.indexOf(item) === index);//with out duplicates
console.log(unique);
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates);

//Write a JS script to search for the following word in the array.
let arr5 = ["the", "way", "x", 4];
let wordToFind = "food";

if (arr5.includes(wordToFind)) {
    console.log(wordToFind);
} else {
    console.log("the search word was not found");
}

//Write a JS script to sort the following string:
let word = "renniw";
let sortedWord = word.split("").sort().join("");
console.log(sortedWord);

//WUsing an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grape", "Kiwi", "Peach", "Pear", "Cherry"];
fruits.splice(4, 0, "Tomato");
console.log(fruits);