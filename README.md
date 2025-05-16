Ficha Resumo sobre o padrão Model-View-Controller.

# Introdução
Na construção de APIs REST utilizando Node.js, o uso de padrões de projeto é fundamental para garantir organização, escalabilidade e manutenibilidade do código. Um dos padrões mais adotados é o MVC (Model-View-Controller).

# O que é o Padrão MVC?
O padrão MVC divide a aplicação em três camadas principais:
Model (Modelo): Responsável pela manipulação dos dados e conexão com o banco de dados.
View (Visualização): Responsável pela apresentação dos dados. No caso de APIs, essa camada geralmente é substituída pelas respostas em JSON.
Controller (Controlador): Responsável pela lógica de negócio, recebendo as requisições e enviando as respostas.

# Benefícios do uso do MVC

Melhor organização do código;
Separação clara de responsabilidades;
Facilita testes e manutenção;
Escalabilidade com múltiplos módulos.

# Ferramentas utilizadas

Node.js: ambiente de execução JavaScript;
Knex.js: query builder para conexão com MySQL;
Restify: framework para construção de APIs REST;
MySQL: banco de dados relacional.
