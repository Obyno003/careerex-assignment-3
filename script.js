// variables containing my name, age and nationality which I displayed in the console
const fullName = "Ogbonna Obinna";
const age = "30years"
const nationality = "Nigerian";

const introduction = `My name is ${fullName}, I am ${age} old and I am a ${nationality}.`
console.log(introduction);


const favouriteQuote = "Better is not good enough, the best is yet to come";
const upperCase = favouriteQuote.toUpperCase();
console.log(upperCase)
const lowerCase = favouriteQuote.toLowerCase();
console.log(lowerCase)


let newWord = "Excellent";
let reversedWord = newWord.split('').reverse().join('');
console.log(reversedWord);

let orangePrice = 150;
let applePrice = 400;
let mangoPrice = 200;

let totalPrice = orangePrice + applePrice + mangoPrice;
console.log(alert(totalPrice));


let englishTestScore = 75;
let mathsTestScore = 87;
let physicsTestScore = 65;
let chemistryTestScore = 95;
let biologyTestScore = 60;

let totalTestScore = englishTestScore + mathsTestScore + physicsTestScore + chemistryTestScore + biologyTestScore;

let averageTestScore = totalTestScore / 5;

console.log(alert(averageTestScore));


let favouriteFood = ["Egusi Soup", "Yam & Egg Sause", "Joll of Rice", "Bean Cake & Bread", "Beans"];
let firstFood = favouriteFood[0];
let lastFood = favouriteFood[favouriteFood.length - 1];
console.log(firstFood, lastFood);

let newFirstFood = favouriteFood.unshift("Fried Rice");
console.log(newFirstFood);
let newLastFood = favouriteFood.push("Vegetable Soup");
console.log(favouriteFood);


// Creating 3 different arrays containing names of students in JSS1, JSS2 & JSS3
let JSS1 = ["Michael", "Ade", "Okafor", "John", "Ezinne", "Agbo", "Ibrahim", "Musa", "Jonathan", "Simon"];
let JSS2 = ["Amina", "Tunde", "Jane", "Ada", "Kingsley", "Festus", "Taiwo", "Mark", "Joe", "Paul"];
let JSS3 = ["Obioma", "Jeremiah", "Emeka", "Benjamin", "David", "Joy", "Blessing", "Stephen", "Fatimah", "Jubril"];