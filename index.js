"use strict";
// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = [
    "Rafiq",
    "Iqbal",
    "Babar"
];
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger table.`);
}
let newGuestAtBegining = "Asif";
guestList.unshift(newGuestAtBegining);
//console.log(guestList)
let newGuestInMiddle = "Adeel";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
//console.log(guestList)
let newGuestAtEnd = "Zulfiqar";
guestList.push(newGuestAtEnd);
console.log("new set of invitatinon messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, your are invited to dinner`);
}
