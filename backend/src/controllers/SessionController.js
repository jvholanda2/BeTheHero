//importando o conexao com o banco de dados
const connection = require('../database/connection');

//verificar se a ong realmente existe para validar seu login
module.exports = {
    async create(request, response){
        const{ id } = request.body; //buscando id atraves do corpo da requisiçao

        //buscar uma ong do banco de dados
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')//selecionar apenas o nome, que é o que eu vou retornar pro front 
            .first();// assim não me retorna um array, apenas um resultado

        //se essa ong nao existir
        if(!ong){
            //status 400: bad request
            return response.status(400).json({ error: 'No ONG found with this ID.'})
        }
        //se tudo deu certo os dados da ong, o nome
        return response.json(ong);
    }
}