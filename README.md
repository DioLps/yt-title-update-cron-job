# yt-title-update-cron-job

O yt-title-update-cron-job é um webserver atualiza os vídeos do canal do usuário usando a api do Youtube

## Instalação

Execute o comando `npm i` no terminal (na pasta do projeto)

## Execução

Para o projeto executar é necessário que duas variáveis de ambiente sejam adicionadas em um arquivo .env na raiz do projeto:

.env:<br/>
* `VIDEO_ID="ID DO VIDEO DO YOUTUBE QUE SEU USUÁRIO TEM DIREITOS DE EDIÇÃO"`<br/>
* `CREDENTIALS='COLE AQUI AS CREDENCIAS DO OAUTH2 DA API DO YOUTUBE NO FORMATO JSON'`<br/>
* `TWITTER_API_BEARER_TOKEN='COLE AQUI AS CREDENCIAS DA API DO TWITTER NO FORMATO JSON'`<br/>
* `TWEET_ID="COLE AQUI O ID DO TWEET PARA QUE O RETWEETS APARECAM NA DESCRICAO DO VÍDEO"`

Após configurar o arquivo .env, basta executar `npm start` e acessar http://localhost:5000, lá eu deixei um index.html com os endpoints da api.
