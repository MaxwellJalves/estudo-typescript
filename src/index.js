"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
//Router
app.get('/', function (request, response) {
    return response.send("Comunicação Realizada com sucesso!");
});
app.listen(3333);
