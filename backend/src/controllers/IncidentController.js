//importar a conexao com o banco de dados
const connection = require('../database/connection')

//exportar um objeto
module.exports = {
    //metood para fazer a listagem de todos os casos
    async index(request,response){
        //esquema de paginação
        const { page = 1} = request.query;

        //quantidade de casos
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//relacionar os dados da tabela de ongs
            .limit(5)
            .offset((page-1)*5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents);
    },



    async create(request, response){
        const{ title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });        
    },

    async delete(request, response){
        const { id } = request.params;//parametro de rota
        const ong_id = request.headers.authorization;// id da ong, para verificar se o caso realmente foi criado pela ong que está querendo deletar

        const incident = await connection('incidents')//buscar o caso dentro da tabela incidentes
            .where('id',id) //onde o id for igual a esse id
            .select('ong_id')// selecionar apenas a coluna ong_id
            .first();//como vai ser retornado apenas 1 elemento, por o id é unico, usa-se o first

            if(incident.ong_id !== ong_id) //se o ong_id do caso que eu busquei, for diferente do if logado na aplicação
            { 
                //codigo de status http: 401(não autoriazado)
                return response.status(401).json({error: 'Operation not permitted.'}); //eu retorno ess mensagem de nao permissão
            }

            await connection('incidents').where('id',id).delete(); //se deu tudo certo eu vou deletar no banco
            //status 204(resposta que deu sucesso, mas não tem conteudo para retornar)
            return response.status(204).send();//send para enviar a resposta vazia
    }
};