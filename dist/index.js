"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
//Router
app.get('/', function (request, response) {

    let retorno = `<ul>
                        <li>Carro</li>
                        <li>Moto</li>
                        <li>Fusca</li>
                   </ul>`
    return response.send("Comunicação Realizada com sucesso! <br>"+ retorno);
});


app.listen(3333);
