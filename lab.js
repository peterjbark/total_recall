// // I. Variables & Datatypes 
//  /* A. Q + A
//         1. How do we assign a value to a variable?
//                 A value is assigned to a variable by using "=" after the variable name.
//         2. How do we change the value of a variable?
//                 Value of a variable can be changed by referencing the value (x = 20 to x = 30).
//         3. How do we assign an existing variable to a new variable?
//                 An existing variable can be assigned to a new variable by using (let existing; let new; existing = new)
//         4. Remind me, what are declare, assign, and define?
//                 Declaring can be thought of as allocating memory for a variable and leaving its value not set while defining means a variable has been 
//                 initialized or given a value already. Assign is to give a variable value from another source. 
//         5. What is pseudocoding and why should you do it?
//                 Pseudocoding is the act of literally writing out the coding thought process for a given task.
//         6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//                 Perhaps a good majority, maybe 80% of the time should be brainstorming or creating a visual step-by-step plan of how to approach a task. 
//                 That way, your code does not look messy and disorganized as you have to back pedal trying to fix previous mistakes or write excessively long code.
// */
// // B. Strings
//         let firstVariable = "Hello World";
//         firstVariable = 123456;
//         let secondVariable = firstVariable;
//         secondVariable = "Hello I am secondVariable"
//         console.log(secondVariable); //"Hello I am secondVariable"
//         console.log(firstVariable); // 123456
//         let yourName = "Peter";
//         let hello = "Hello, my name is " + yourName;
//         console.log(hello);

// // C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a != b);
// console.log(c != d);
// console.log('Name' === 'Name');
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a + b == c); 
// console.log(a * a == d);
// console.log(48 == '48');

// // D. The Farm
// let animal = "cow";
// if(animal == "cow"){
//         console.log("moooooo")
// }else {
//         console.log("Hey! You're not a cow.")
// }

// // E. Driver's Ed
// let driverAge = 21;
// if (driverAge >= 16){
//         console.log("Here are the keys!")
// }else{
//         console.log("Sorry, you're too young.")
// }

// // II. Loops
// // A. The Basics
// for (let i=0; i<= 10; i++){
//         console.log(i);
// }
// for (let i=10; i<= 400; i++){
//         console.log(i);
// }
// for (let i=12; i<= 4000; i+=3){
//         console.log(i);
// }
// // B. Get Even
// for (let i=1; i<= 100; i++){
//         if(i %2 == 0){
//                 console.log(i+" <-- is an even number")
//         }else{
//         console.log(i);
//         }
// }

// // C. Give Me Five
// for (let i = 0; i <= 100; i++){
//         if (i == 0){
//                 continue;
//         }else if (i % 3 == 0 && i % 5 ==0){
//                 console.log("I found a " + i + ". High five!" + " Three is a crowd")
//         }else if (i % 5 == 0){
//                 console.log("I found a " + i + ". High five!")
//         }else if(i % 3 == 0){
//                 console.log("I found a " + i + " Three is a crowd")
//         }
// }

// // D. Savings Account
// let bank_account = 0;
// for (let i = 1; i<= 10; i++){
//         bank_account += i;
// }
// let double_bank_account = 0;
// for (let i = 1; i<= 100; i++){
//         double_bank_account += i*2;
// }
// console.log(double_bank_account);

// // III. Arrays & Control flow
// // A. Talk About It
// /* 1. What are the things in an array called?
//         An array is a collection of data assigned to incrementing indexes, starting at 0. 
//    2. Do Arrays guarantee those things will be in order?
//         An array does not guarantee data will be in order, order is dependent on input methods such as pop, shift, unshift as well as a sort method. 
//    3. What real-life thing could you model with an array?
//         A real-life thing that could be modeled with an array is a collection of student names from a class, or various models of a car company. 
// */
// // B. Easy Does it
// let quotes = ["I'm gonna make him an offer he can't refuse.", "Toto, I've a feeling we're not in Kansas anymore.", "Go ahead, make my day."]
// // C. Accessing Elements
// const randomThings = [1, 10, "Hello", true]
// /* 1. How do you access the 1st element in the array? 
//         randomThings[0];
//    2. What would you write to access the 3rd element of the array?
//         randomThings[2];
// */
// // D. Change Values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[4]="Octocat"; // ourClass.pop(); -> ourClass.push("Octocat")
// ourClass.push("Cloud City");
// console.log(ourClass);

// // E. Mix It Up
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.push("My String");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();
// console.log(myArray);

// // F. Biggie Smalls
// let integer = 23;
// if (integer < 100){
//         console.log("little number")
// }else if(integer >= 100){
//         console.log("big number")
// }

// // G. Monkey in the Middle
// let monke = 11;
// if(monke < 5){
//         console.log("little number")
// }else if(monke > 10){
//         console.log("big number")
// }else{
//         console.log("monkey")
// }

// // H. What's in Your Closet?
// const kristynsCloset = [
//         "left shoe",
//         "cowboy boots",
//         "right sock",
//         "Per Scholas hoodie",
//         "green pants",
//         "yellow knit hat",
//         "marshmallow peeps"
//       ];
// const thomsCloset = [
//         [// These are Thom's shirts
//           "grey button-up",
//           "dark grey button-up",
//           "light blue button-up",
//           "blue button-up",
//         ],
//         [// These are Thom's pants
//           "grey jeans",
//           "jeans",
//           "PJs"
//         ],
//         [// Thom's accessories
//           "wool mittens",
//           "wool scarf",
//           "raybans"
//         ]
//       ];
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// kristynsCloset.splice(6,0,"raybans");
// kristynsCloset.splice(5,1,"stained knit hat")
// console.log("Thom is wearing a " + thomsCloset[0][1] + " paired with some " + thomsCloset[1][2] + " and fancy " + thomsCloset[2][2]);
// thomsCloset[1].pop();
// thomsCloset[1].push("Footie Pajamas");
// console.log(thomsCloset);

// IV. Functions
// A. printGreeting
function printGreeting(name){
        console.log("Hello there, " + name + ".");
}
printGreeting("Bob");
// B. printCool
function printCool(name){
        console.log(name + " is cool.");
}
printCool("Bob");

// C. calculateCube
function calculateCube(number){
       let cube = number * number * number;
       console.log(cube);
}
calculateCube(3);

// D. isVowel
function isVowel(character){
        let input = character.toLowerCase();
        if(input == "a" ||input == "e" || input == "i" || input == "o" || input == "u"){
               return true;
}else{
       return false;
}
}
let a = isVowel("a");
let b = isVowel("b");
console.log(a);
console.log(b);

// E. getTwoLengths
function getTwoLengths(string1,string2){
        let lengths = [string1.length];
        lengths.push(string2.length);
        return lengths;
}
let test = getTwoLengths("one","four");
console.log(test);

// F. getMultipleLengths
function getMultipleLengths(array){
        let arrayLength = [];
        for(i=0; i<array.length; i++) {
                arrayLength.push(array[i].length);
        }
        return arrayLength;
}
let test1 = getMultipleLengths(["one","two","three"]);
console.log(test1);

// G. maxOfThree
function maxOfThree(a,b,c){
        if(a>b  && a>c){
        return a;
        }else if(b > a && b > c){
        return b;
        }else if(c > a && c > b){
        return c;
        }else if (a == b || a == c){
        return a;
        }else if (b == c){
        return c;
        }else{
                return "not valid"
        }
}
let test3 = maxOfThree(1,2,5);
console.log(test3);

// H. printLongestWord
function printLongestWord(array){

}


// V. Objects
// A. Make a User Object

// B. Update the User

// C. Adding Keys and Values

// D. Shopaholic!

// E. Object within an Object

// F. Loops

// G. Functions Operating on Objects

