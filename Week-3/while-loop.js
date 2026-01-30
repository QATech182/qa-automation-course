// for (let i = 1; i <= 5; i++) {
//   // i +=2 if you want to increase 2
//   // to reassign the varaiable, we used the let NOT const
//   console.log("Count:" + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log("Count:" + i);
//   i++; // without this, this will run the forever
// }

// let i = 1;
// let isCorrectPasswordLengthCorrect = 8;
// while (isCorrectPasswordLengthCorrect <= 5) {
//   console.log("Count:" + isCorrectPasswordLengthCorrect);
//   isCorrectPasswordLengthCorrect++; // without this, this will run the forever
// }

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip the current iteration only
  if (i === 5) break; // exits the entire loop immediately
  console.log(i);
}

// nested loops
