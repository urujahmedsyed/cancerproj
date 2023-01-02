fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        name:'user1'
    })
})
// .then(res=>console.log(res))
.then(res=>{
    return res.json()
})
.then(data=>console.log(data))
.catch(error=>console.log('error'))
//fetch always succeeds and no error displayed
