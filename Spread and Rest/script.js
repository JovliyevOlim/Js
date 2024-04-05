//SPREAD  va REST
// ...


// SPREAD
const  vegetables = ['carrot','potato', 'onion']
const  fruits = ['apple','peach','grapes']
//
// console.log(...vegetables)
// console.log(...fruits)

const  harversofvegetables ={
    carrot:30,
    potato:40,
    onion:20
}

const  harversOfFruits = {
    carrot: 25,
    apple:15,
    peach:5,
    grapes:20,
}

// console.log({...harversOfFruits,...harversofvegetables})


// const  allFood2 = vegetables.concat(fruits).sort()
// const  allFood = [...vegetables,...fruits]
//
// console.log(...allFood)
// console.log(allFood2)

//
// const  number =[1,5,6,8,11,15]
//
//
// console.log(Math.max(...number))
// console.log(Math.max.apply(null,number))


//REST

Array.prototype.sum =  function (a,b,...rest){
    console.log(rest)
    return a+b + rest.reduce((a,i)=>a+i,0)
}

const number = [1,2,3,4,5,6,7,8,9,10,11,12,13]
//
// const  a = number[0]
// const  b =number[1]

// const  [a,b,...others] =number
// console.log(a,b)
// console.log(others)

const numbers2 = [10,20,30,40,50,60,70,80,90]
//
// console.log(number.sum(...number))
// console.log(numbers2.sum(...numbers2))

const  user = {
    email:'olim@gmail.com',
    age:'24',
    city:'Toshkent',
    country:'Uzbekistan'
}

const {email,age , ...adress} = user

console.log(email ,age)
console.log(adress)
