// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript/65674f310bb5d10024cf0707
// 6kyu

function findOdd(A) {
  return ~~Object.entries(A.reduce((o, e) => ({...o, ...{[e]: o[e] ? ++o[e] : 1}}), {})).find(x => x[1] % 2)[0];
}
