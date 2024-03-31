# Movies API

## Descrição

API para uma web app de filmes.

Bibliotecas usadas:

- Typeorm: tenho experiência com Typeorm e Prisma com Next.js, mas acabo preferindo o Typeorm por considerá-lo mais fácil/rápido de se desenvolver.
- Bcrypt: para encriptação da senha.
- JWT: para autenticação/autorização.

Nota: primeiro usuário (admin) deve ser criado direto na database, já que a rota de criação de usuário é protegida para apenas admins

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
