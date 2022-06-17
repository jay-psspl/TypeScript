var a = 10;
var jay = 1;
//Boolean
var x = false;
//Decimal 
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//String
var Name = "Jay";
Name = 'Yash';
//Explict Type
var i = "Jay";
console.log(typeof i);
// Implicit Type
var xy = "Jay";
console.log(xy);
console.log(typeof xy);
// Array
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
//Enum
// enum CardinalDirections {
//    North,
//    East,
//    South,
//    West
//  };
//  let currentDirection1 = CardinalDirections.East;
//  console.log(currentDirection1);
var StoreSettings;
(function (StoreSettings) {
    StoreSettings[StoreSettings["Global"] = 1] = "Global";
    StoreSettings[StoreSettings["Standared"] = 2] = "Standared";
    StoreSettings[StoreSettings["Custom"] = 3] = "Custom";
})(StoreSettings || (StoreSettings = {}));
;
console.log(StoreSettings.Global);
console.log(StoreSettings.Custom);
//object
var person = {
    firstname: "Jay",
    lastname: "Patel"
};
//access the object values 
console.log(person.firstname);
console.log(person.lastname);
