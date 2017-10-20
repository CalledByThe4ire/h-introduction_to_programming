import { toUpperCase } from './strings';

// BEGIN (write your solution here)
// solution 1
export default str => str.replace(/[\wа-яё]+/ig, word => toUpperCase(word[0]) + word.slice(1));

// solution 2
// export default str => str.replace(/\b\w+\b/ig, word => toUpperCase(word[0]) + word.slice(1));

// tutor's solution
// export default (str) => {
//   let result = '';
//   for (let i = 0; i < length(str); i += 1) {
//     const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
//     result += shouldBeBig ? toUpperCase(str[i]) : str[i];
//   }

//   return result;
// };

// END
