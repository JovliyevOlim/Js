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



function  addUser(user,callback){
    setTimeout(()=>{
        users.push(user)
        callback()
    },2000)
}


getUser()

addUser({name:'Akbar',fisrtname:'Jovliyev'},getUser)
