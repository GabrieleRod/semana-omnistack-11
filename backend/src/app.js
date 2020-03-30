const express = require('express');
const cors = require('cors'); //5.2K (gzipped: 2.1K)
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * METODOS HTTP:
 * 
 * GET - BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST - CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT - ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE - DELETAR UMA INFORMAÇÃO NO BACK-END
*/

/**
 * TIPOS DE PARÂMETROS:
 * 
 * QUERY PARAMS: PARÂMETROS ENVIADOS NA ROTA APÓS "?" (FILTROS, PAGINAÇÃO)
 * ROUTE PARAMS: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECUSOS
 * REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
 */

/**
 * SQL
 * NOSQL
 */

/**
 * DRIVER: SELECT * FROM users
 * QUERY BUILDER: table('users').select('*').where()
 */
