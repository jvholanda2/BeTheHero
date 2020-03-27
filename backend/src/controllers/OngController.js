const crypto = require('crypto');
const connection = require('../database/connection');// conexao com o banco



// rota raiz do node, uma função(requisição/resposta)
module.exports = {
   // ++++++Listagem de ongs++++++++
    async index(request, response) {
        const ongs = await connection('ongs').select('*');//aguardar um codigo finalizar, pegando todos da ong

        return response.json(ongs);// podendo enviar o arquivo direto
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        //para criar o id interno
        const id = crypto.randomBytes(4).toString('HEX');// gerar 4 bytes de caracteres random, que serao convertidos em uma string hexadexima
    
        //conexão com o banco de dados
        //quando o node chegar no codigo, ele espera o codigo finalizar apra continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        //return response.send("hello world"); // retornando texto msg
        return  response.json({ id });//retornando json
    }
     
};