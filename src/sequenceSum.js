const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return end;
  }
  // 2 + sequenceSum(2 + 1, 6) // 2 + 18
  // 3 + sequenceSum(3 + 1, 6) // 3 + 15
  // 4 + sequenceSum(4 + 1, 6) // 4 + 11
  // 5 + sequenceSum(5 + 1, 6) // 5 + 6
  return begin + sequenceSum(begin + 1, end);
  // END
};

// Visualize Execution: https://goo.gl/UlTxCs


export default sequenceSum;
