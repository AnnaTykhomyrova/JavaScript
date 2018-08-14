var result = [];
var numberMin = +prompt('Введите начало диапазона (больше 0)');
var numberMax = +prompt('Введите конец диапазона');

    if ( numberMax > numberMin && numberMin >= 1 ) {
    primeNumber ( numberMin , numberMax );
    alert(result);
    }
    else alert('Введены неверные данные');

    function primeNumber ( min , max ) {
    if (min < 2) { min = 2 }
    nextPrimeNumber: for (var i = min; i <= max; i++) {
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) continue nextPrimeNumber;
        }
        result.push (i);
    }
}

console.log(numberMin);
console.log(numberMax);