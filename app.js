const express = require('express');
const app = express();
const path = require('path');

const port = 3000;
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.status(200).send('Bienvenidos')
});

app.get('/home', function(request, response){
    response.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get('/register', function(request, response){
    response.sendFile(path.join(__dirname, 'views/register.html'))
});

app.get('/login', function(request, response){
    response.sendFile(path.join(__dirname, 'views/login.html'))
});

app.get('*', function (request, response){
    response.status(404).send('NO ENCONTRADO', 404)
})


app.listen(process.env.PORT || port, ()=>{
    console.log('Express running en puerto: ' + port)
});



