const express = require('express');
const app = express();
/*
 controle de acesso - CORS (Cross-Origin Resource Sharing) é uma especificação do W3C que, 
// quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
*/
const cors =  require('cors');
/* 
controle das requisições vindo para o servidor
O Morgan é uma biblioteca que pode ser utilizada no NodeJS para salvar o log das requisições feitas a API.
E o uso do Morgan no Node pode ser importante, pois com ele, é possível monitorar todos os dados de entrada de sua API, verificar se tem algum dado incorreto que está sendo enviado e entre outros casos de uso.
Esse monitoramento pode facilitar, integração de terceiros com a sua API, integração de outras partes do seu código e muito mais
*/
const morgan = require('morgan');

// database
require('./database');

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./routes/main.routes'));

// passa a porta que roda o servidor
app.listen(app.get('port'), () => {
    console.log('Server is Up.');
});