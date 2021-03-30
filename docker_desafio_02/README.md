# Dev FullCycle 2.0

## Docker - Desafio 02

Criar uma aplicação com 3 componentes:

- NGINX
- NODE.js
- MySQL

Requisitos:

Quando o usuário acessar o NGINX, acessar uma aplicação NODE.JS que adicione um registro em um banco de dados MySQL, cadastrando uma informação em uma tabela ```people```.

O retorno da aplicação NODE.JS para o NGINX deverá ser:

```<h1>``` Full Cycle Rocks!```</h1>```

- Lista de nomes cadastrados no banco de dados.

Gerar o docker-compose de uma forma que bastará executar: ```docker-compose up -d``` para que todos os componentes estejam disponíveis, sendo o NGINX acessível a partir da porta ```8080```.

---

### Para executar o projeto

A partir deste diretório:

```shellscript
docker-compose up -d
```
