const sumAll = function (sum1, sum2) {
  if (!Number.isInteger(sum1) || !Number.isInteger(sum2)) return `ERROR`;
  if (sum1 < 0 || sum2 < 0) return `ERROR`;
  if (sum1 > sum2) {
    const temp = sum1;
    sum1 = sum2;
    sum2 = temp;
  }
  let sum = 0;
  for (let i = sum1; i < sum2 + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
