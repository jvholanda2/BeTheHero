//responsavel pelo perfil de uma entidade

//importação do banco
const connection = require('../database/connection');



//retornar os dados especificos de uma unica ong
module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;//acessando os dados da ong que esta logada
        
        //buscando todos os casos
        const incidents = await connection('incidents')
            .where('ong_id', ong_id) //dessa ong
            .select('*'); // todos os campos dos casos
        return response.json(incidents);
    }
}