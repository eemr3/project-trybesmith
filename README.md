
# Project Trybesmith

Este projeto é importante para fixar o aprendizado do bloco de TypeScript. Com ele, você irá praticar a sintaxe nova, bem como a tipar variáveis e funções, deixando seu código mais compreensível e robusto.


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/42968718/168615392-b954cd4a-25e8-4bf3-9961-f39f70c32c12.png)


## Aprendizados

- Definir o que é a linguagem TypeScript;
- Compreender a relação entre a linguagem TypeScript e a linguagem JavaScript;
- Compreender o que é Tipagem (Dicas de tipo);
- Compreender a diferença entre Compilador e Transpilador;
- Compilar o seu código TypeScript em código JavaScript;
- Compreender o sistema de tipos do TypeScript; e
- Declarar variáveis de tipos primitivos do TypeScript.
- Declarar tipos em coleções, Arrays e Tuplas;
- Declarar variáveis de tipos objeto do TypeScript;
- Compreender o que são Type Aliases;
- Compreender o que é uma Classe;
- Compreender o que é uma Interface;
- Compreender o que são Generics;
- Estruturar um model que usa os conceitos aprendidos.
- Declarar tipos em coleções, Arrays e Tuplas;
- Declarar variáveis de tipos objeto do TypeScript;
- Compreender o que são Type Aliases;
- Compreender o que é uma Classe;
- Compreender o que é uma Interface;
- Compreender o que são Generics;
- Estruturar um model que usa os conceitos aprendidos.


## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/eemr3/project-trybesmith)
![GitHub contributors](https://img.shields.io/github/contributors/eemr3/project-trybesmith)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Stack utilizada

**Back-end:** Node, Express, docker-compose, mysql, typescript


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MYSQL_HOST`

`MYSQL_USER`

`JWT_SECRE`


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/project-trybesmith.git
```

Entre no diretório do projeto

```bash
  cd project-trybesmith
```

Instale as dependências

```bash
  npm install
```

Rode o docker-compose

```bash
  docker-compose up -D
```

Acesse o container trybesmith

```bash
  docker exec -it trybesmith bash 
```

Inicie o servidor

```bash
  npm run dev
```

Senha do BD (Lembrando que se tratad de um ambiente de estudos)
```bash
  password
```