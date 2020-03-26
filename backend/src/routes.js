const express = require('express');//importando express

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');





const routes = express.Router();//desacoplando o modulo de rotas do express em uma nova variavel 


//+++++++Login++++++++++++++
routes.post('/sessions', SessionController.create);


//++++++Listagem de ongs++++++++
routes.get('/ongs',OngController.index);
//+++++++Cadastro de ongs++++++++
routes.post('/ongs', OngController.create);


//+++++++Cadastrando casos++++++++
routes.post('/incidents', IncidentController.create);
//+++++++Listar um caso especifico+++++++
routes.get('/profile', ProfileController.index);
//++++Listar os casos+++++++
routes.get('/incidents', IncidentController.index);
//+++++++Deletando casos++++++++
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes; //para exportar alguma variavel de dentro de um arquivo



