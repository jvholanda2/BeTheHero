const knex = require('knex');//importando o knex
const configuration = require('../../knexfile');//importar as configurações do banco de dados, que tao no knexfile

const connection = knex(configuration.development);//passando a conexao de desenvolvimento

module.exports = connection;// exportar a conexao com o banco de dados
