# yt-title-update-cron-job

O yt-title-update-cron-job é um webserver atualiza os vídeos do canal do usuário usando a api do Youtube

# Instalação

Execute o comando `npm i` no terminal (na pasta do projeto)

# Execução

Para o projeto executar é necessário que duas variáveis de ambiente sejam adicionadas em um arquivo .env na raiz do projeto:

.env: 
  VIDEO_ID="ID DO VIDEO DO YOUTUBE QUE SEU USUÁRIO TEM DIREITOS DE EDIÇÃO"
  CREDENTIALS='COLE AQUI AS CREDENCIAS DO OAUTH2 DA API DO YOUTUBE NO FORMATO JSON'
