
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function(table) {
        //chave primaria
        table.increments();//id numerico, que cria uma chave primeira autoincrement
        
        //campos da tabela
        table.string("title").notNullable();//string,depois notnullable para não poder ser nulo
        table.string("description").notNullable();
        table.decimal("value").notNullable();//decimal, float
        
        //relacionamento
        table.string('ong_id').notNullable();//id da ong tbm é string, então tenho que armazenar em string

        //chave estrageira
        table.foreign('ong_id').references('id').inTable('ongs');//na coluna onid referencia a coluna ia dentro da tabela ongs
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
