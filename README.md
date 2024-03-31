# Movies API

## Descrição

API para uma web app de filmes.

Bibliotecas usadas:

- Typeorm: tenho experiência com Typeorm e Prisma com Next.js, mas acabo preferindo o Typeorm por considerá-lo mais fácil/rápido de se desenvolver.
- Bcrypt: para encriptação da senha.
- JWT: para autenticação/autorização.

Nota: primeiro usuário (admin) deve ser criado direto na database, já que a rota de criação de usuário é protegida para apenas admins

Tentei utilizar os princípios de DDD, SOLID e Clean Code nesse projeto. Gostaria de ter adicionado migrations e testes, mas por questão de tempo acabou não acontecendo. Obrigada pela oportunidade de qualquer forma!

## Documentação

- [Swagger](http://localhost:3000/api#/) (quando a app estiver rodando)

## Instalação

```bash
$ npm install
```

## Rodando a app

Primeiro você precisa criar uma database local do postgres. Um arquivo .env-example pode ser encontrado na pasta principal com todas as variáveis necessárias.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Mais

[Frontend](https://github.com/maora96/movies-frontend)
