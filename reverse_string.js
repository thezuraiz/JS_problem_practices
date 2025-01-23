let name = "Hello I am Zuraiz Khan";
let reversed = name.toUpperCase().split("").reverse().join("");

console.log(reversed);

/// In JS, String is immutable! means you can not change it index wise, you have to change it full string.

let newName = "Hello I am Zuraiz Khan";

let reversedName = [];
newName.split("").forEach((e) => reversedName.unshift(e));
console.log(`reversedName: ${reversedName.join("")}`);

// •   push() ⁠: Adds one or more elements to the end of an array and returns the new length of the array.
// •⁠  ⁠⁠ pop() ⁠: Removes the last element from an array and returns that element.
// •⁠  ⁠⁠ shift() ⁠: Removes the first element from an array and returns that element.
// •⁠  ⁠⁠ unshift() ⁠: Adds one or more elements to the beginning of an array and returns the new length of the array.
