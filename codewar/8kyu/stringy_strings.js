// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

let stringy

stringy = size => Array.from({length: size}, (_, i) => i%2 ? '0' : '1').join('')

stringy = size => ''.padStart(size, '10')

stringy = size => "10".repeat(size).slice(0,size);
