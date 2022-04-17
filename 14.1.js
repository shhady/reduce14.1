const arr = [1, 324, 423, 51, 6, 71, 833, 913, 102];

// const maxNum = arr.reduce((max, curr) => {
//   if (max < curr) return curr;
//   return max;
// });

// console.log(maxNum);

// const avg = arr.reduce((total, currVal) => {
//   let result = total + currVal;
//   if (arr.indexOf(currVal) === arr.length - 1) return result / arr.length;
//   return result;
// });
// console.log(avg);

const isEven = arr.reduce((total, currentVal) => {
  if (total % 2 === 1) {
    total = 0;
  }
  if (currentVal % 2 === 0) {
    return total + currentVal;
  }
  return total;
});
console.log(isEven);
