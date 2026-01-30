// 1. for loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let i = 1;
i++; // -> 1+1 = 2
i++; // -> 2+1 = 3
i++; // -> 3+1 = 4
i++; // -> 4+1 = 5

// index start 1 and end with less and equal to 5
for (let i = 1; i <= 5; i++) {
  // to reassign the varaiable, we used the let NOT const
  console.log("Count:" + i);
}
