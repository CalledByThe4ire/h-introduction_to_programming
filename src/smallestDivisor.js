const smallestDivisor = (num) => {
  if (num <= 0) {
    return 'Введите положительное число';
  }
  if (num === 1) {
    return 1;
  }
  const iter = (acc) => {
    if (num % acc !== 0) {
      return iter(acc + 1);
    }
    return acc;
  };
  return iter(2);
};

export default smallestDivisor;

// tutor's solution
/* const iter = (acc) => {
  // We use 'num / 2' in the condition below, and not 'num'.
  // This is a simple optimization: a number cannot be divided
  // by a number larger than its half.
  if (acc > num / 2) {
    return num;
  }
  if (num % acc === 0) {
    return acc;
  }
  return iter(acc + 1);
};

return iter(2); */
