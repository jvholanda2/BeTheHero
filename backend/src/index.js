const express = require('express');//importar o modulo express para variavel express, que agora vai conter todas as funcionalidades disponiveis (pacote)
const cors =  require('cors');
const routes = require('./routes');//importar as rotas, ./arquivo
const app = express(); //variavel que vai armazenar minha aplicação

//permite quais aplicaçoes podem acessar o backend
app.use(cors());
//antes de todas as requisições, antes das rotas: "Express, converta o json em javascript"
app.use(express.json());//comunicando ao express que estamos utilizando o json para o corpo das requisições.
app.use(routes);
app.listen(3333);//minha aplicação vai ouvir a porta 3333

/**
 * Rota / Recurso
*/

/*
    Métodos HTTP
    GET: Buscar/Listar uma informação do backend
    POST: Criar uma informação no backend 
    PUT: Alterar uma informação do backend
    DELETE: Deletar uma informação no backend
*/

/**
 *  Tipos de parametros que podem ser enviados para uma rota:
 *  
 *  Query Parms: Parametros nomeados, enviados na rota após "?". Geralmente servem para filtros, paginação.(acesso query)
 *  Route Parms: Parametros utilizados para identificar recursos. (acesso params)
 *  Request Body: Corpor da requisição, usado para criar ou alterar recursos.
 *  
 */

 /*
    SQL: MySQL, SQLite*, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB
 */

 /*
    Driver: Select * FROM users
    Query Builder: table('user').select('*').where()
 */
//quero ver agora






