function myName(){
 console.log('My name:', this)

}


const  car = {
    name :'Cobalt',
    year:2022,
    sayName:myName,
    sayNameWindow:myName.bind(window),
    info: function (model,color){
        console.log(`Car name is: ${this.name}`)
        console.log(`Year: ${this.year}`)
        console.log(`Model: ${model}`)
        console.log(`Color: ${color}`)
    }
}


const  gentra = {
    name:'Gentra',
    year:2020
}

// bind haqida
// car.info.bind(gentra,'Chevrolet')()


// // call haqida
// car.info.call(gentra,'Chevrolet','red')
//
// car.info.apply(gentra,['Chevrolet','white'])


let  arr = [1,2,3,4,5]


// function plusTo(n){
//
// }


Array.prototype.plusTo = function (n){
    return this.map(a =>a+n)
}



console.log(arr.plusTo(2))
// console.log(plusTo(2))
