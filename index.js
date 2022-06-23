
const express = require('express') // importei o express
const port = 3000
/*
-Query params => meusite.com/users?nome=rodolfo&age=28    // FILTROS
-Route Params => /users/2   // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
*/




const app = express() // armazenei o express na variável

app.get('/users', (request, response) =>{ // toda vez que alque acessar localhost/porta300/user ele retorna isso aqui
    const name = request.query.name
    const age = request.query.age
    
    console.log (request)
    return response.json({name: name, age: age})
})

app.listen(3000, () =>{
    console.log(`Server started on ${port}`)
})// avisando qual porta o aplicativo vai rodar