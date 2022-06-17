var a = 10;
var jay = 1;

//Boolean
var x:boolean = false;

//Decimal 
var decimal: number = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;

//String

var Name: string = "Jay";
Name = 'Yash'

//Explict Type

let i : string = "Jay"; 
console.log(typeof i);

// Implicit Type

let xy = "Jay";
console.log(xy);
console.log(typeof xy);


//Enum

// enum CardinalDirections {
//    North,
//    East,
//    South,
//    West
//  };
             
//  let currentDirection1 = CardinalDirections.East;

//  console.log(currentDirection1);


 enum StoreSettings {
   Global = 1,
   Standared,
   Custom
 };
 
 console.log(StoreSettings.Global);
 console.log(StoreSettings.Custom);


 //object

 var person = { 
   firstname:"Jay", 
   lastname:"Patel" 
}; 
//access the object values 
console.log(person.firstname) 
console.log(person.lastname)



// Union types are used when a value can be more than a single type

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');