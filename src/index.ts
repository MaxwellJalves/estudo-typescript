import  express from "express";

let app = express();


//Router
app.get('/',(request,response) =>{
    return response.send("Comunicação Realizada com sucesso!")
})


app.listen(3333);