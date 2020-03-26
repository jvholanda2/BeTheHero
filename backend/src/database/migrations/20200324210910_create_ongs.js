// //metodo up é sempre responsável pela criação da tabela
// exports.up = function(knex) {
//     //criando a table, nome da tabela, e uma função que recebe nossa tabela como parametro
//    return knex.schema.createTable("ongs", function(table) {
//         table.string("id").primary();//string com o nome id, e vai ser a chave primaria
//         table.string("name").notNullable();//string,depois notnullable para não poder ser nulo
//         table.string("email").notNullable();
//         table.string("whatsapp").notNullable();
//         table.string("city").notNullable();
//         table.string("uf",2).notNullable();//como temos certeza que serão 2 caracteres, passamos como parametro o tamanho do texto que será armazenado
        


//     });
// };
// //caso dê algum problema que eu precise refazer, o que desfazer?
// exports.down = function(knex) {
//    return knex.schema.dropTable("ongs");
  
// };
exports.up = function(knex) {
    return knex.schema.createTable("ongs", function(table) {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("whatsapp").notNullable();
      table.string("city").notNullable();
      table.string("uf", 2).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("ongs");
  };