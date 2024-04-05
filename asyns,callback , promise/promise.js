const  users = [
    {name:'Olim',fisrtname:'Jovliyev'},
    {name:'ODil',fisrtname:'Jovliyev'},
    {name:'UMId',fisrtname:'Mahmudov'},
]

function getUser(){
    setTimeout(()=>{
        let result = ''
        users.forEach((user)=>{
            result += `<li>${user.name}  ${user.fisrtname}</li>`
        })
        document.body.innerHTML = result
    },1000)
}


function  addUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(user)

            const error = false

            if(!error){
                resolve()
            }else{
                reject('nimadri xato ketdi')
            }

        },2000)
    })

}


addUser({name:'Akbar',fisrtname:'Jovliyev'})
    .then(getUser).catch(error=>console.log(error))
