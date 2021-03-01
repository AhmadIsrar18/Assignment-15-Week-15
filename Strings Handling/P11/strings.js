
// function reverse(number) {
//     return (
//     parseFloat(
//     num
//     .toString()
//     .split('')
//     .reverse()
//     .join('')
//     ) * Math.sign(number)
//     )
//     }

Reverse = function(num) {
    var reversed_number = 0;
    while (num != 0) {
    reversed_number *= 10;
    reversed_number += number % 10;
    num -= num % 10;
    num /= 10;
    }
    return reversed_number;
    }

