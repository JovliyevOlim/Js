// Hoisting haqida


var first = 'first'
var second = 'second'
var third = 'third'

four = 'four'

console.log(four)


var four

// console.log(myName())
// bu holatda funksiyani ko'rmaydi

var myName =  function(){
    var name = 'Bexruz'
    return name
}

// funksiyani pastda chaqirish kerak
console.log(myName())
