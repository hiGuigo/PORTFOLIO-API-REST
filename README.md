# <p align="center">**Portfólio - API REST**</p>

<div align="center">

|                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <p align="center"><a href="#sobre">Sobre</a> • <a href="#manual">Manual de Instalação</a> • <a href="#rotas">Rotas da API</a> </p> <a href="#exemplo">Exemplo de Requisição</a> • <a href="#stack">Stack Utilizada</a> • <a href="#caracteristicas">Características da API</a> |
|                                                                                                                                                                                                                                                                                |

</div>

## **Sobre o Projeto**<a id="sobre"></a>

Esta aplicação é uma API REST desenvolvida para centralizar e disponibilizar os dados utilizados no portfólio pessoal, incluindo:

- formações
- competências
- experiências
- certificados
- projetos

A aplicação segue uma arquitetura organizada por responsabilidades, separando:

- controllers
- services
- routes
- database

Além disso, os dados são persistidos em um banco NoSQL utilizando MongoDB Atlas.

## **Manual de Instalação**<a id="manual"></a>

### 1. Clonar o repositório

```bash
git clone https://github.com/hiGuigo/PORTFOLIO-API-REST
```

### 2. Rodar o backend

1. Acesse a pasta:

```bash
cd PORTFOLIO-API-REST/
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configurando o MongDB Atlas

```bash
1. Crie sua conta acessando:
https://www.mongodb.com/atlas

2. Crie seu cluster:
- escolha o plano gratuito
- selecione a região
- crie o cluster

3. Crie seu usuário:
Em "Database Access"
Defina: "username" e "password"
```

4. Configure o arquivo `.env`

```bash
1. Crie o .env com base no arquivo modelo:
cp .env.sample .env

2. altere as credencias:
 - usuario
 - senha
 - seu_mongo_cluster
```

5. Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

O backend estará disponível em `http://localhost:3000` por padrão.

### 3. Rodar o frontend

O frontend precisa de um servidor local.

#### Usando Live Server (VS Code)

1. Abra a pasta do projeto no VS Code
2. Clique com o botão direito no arquivo `index.html`
3. Selecione **Open with Live Server**

## **Rotas da API**<a id="rotas"></a>

### Certificados

```txt id="cw4s6d"
GET    /certificados
GET    /certificados/:id
POST   /certificados
PATCH  /certificados/:id
DELETE /certificados/:id
```

### Competências

```txt id="5vtxhn"
GET    /competencias
GET    /competencias/:id
POST   /competencias
PATCH  /competencias/:id
DELETE /competencias/:id
```

### Experiências

```txt id="mg5ah1"
GET    /experiencias
GET    /experiencias/:id
POST   /experiencias
PATCH  /experiencias/:id
DELETE /experiencias/:id
```

### Formações

```txt id="o74n8l"
GET    /formacoes
GET    /formacoes/:id
POST   /formacoes
PATCH  /formacoes/:id
DELETE /formacoes/:id
```

### Projetos

```txt id="j8kghy"
GET    /projetos
GET    /projetos/:id
POST   /projetos
PATCH  /projetos/:id
DELETE /projetos/:id
```

## **Exemplo de Requisição**<a id="exemplo"></a>

### POST `/formacoes`

```json id="0xz3om"
{
  "tipo": "Ensino Superior",
  "instituicao": "FATEC",
  "curso": "DSM",
  "periodo": "2025 - presente"
}
```

### Resposta Esperada

```json id="cw13gt"
{
  "mensagem": "Formação 'DSM' adicionada com sucesso",
  "data": {
    "_id": "682f6f2d8f5f9d8d9e9b1234",
    "tipo": "Ensino Superior",
    "instituicao": "FATEC",
    "curso": "DSM",
    "periodo": "2025 - presente"
  }
}
```

## **Stack Utilizada**<a id="stack"></a>

### Back-end

- Node.js
- Express.js

### Banco de Dados

- MongoDB Atlas

### Bibliotecas

- express
- mongodb
- dotenv
- cors

### Arquitetura

- API REST
- Separação por responsabilidades
- Estrutura modular
- Comunicação via JSON

## **Características da API**<a id="caracteristicas"></a>

- Persistência de dados
- Estrutura modular
- API REST
- Banco NoSQL
- Separação de responsabilidades
- Suporte a JSON
- CRUD completo
- Integração com MongoDB Atlas
