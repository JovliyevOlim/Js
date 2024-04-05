// Prototype


const  user  = {
    name:'Olim',
    email:'olim@gmail.com',
    age:24,
    hello:function (){
        console.log("Hello")
    }
}

Object.prototype.myAge = function (){
    console.log('My age 24')
}


const  shaxboz = Object.create(user)
shaxboz.name = 'Shaxboz'

console.log(shaxboz.myAge())

console.log(user)

const  str = new String('bu string')
console.log(str.myAge())
