# Tutorial: Migrations com Node.js e Sequelize

As Migrations são um recurso que permitem que você altere seu schema de banco de dados sem a necessidade de recriar uma tabela, o que por vezes pode ocasionar em perda de informações se você já tiver dados armazenados. Além disso, elas são úteis para que devs recém-chegados à equipe possam utilizar o mesmo schema de banco de dados sem a necessidade de fazer todo o processo manual no SGBD.

Pré-requisitos:
- Sequelize CLI
- Instalação das dependências DotEnv, Sequelize e MySQL3
- MySql (apenas para fins de visualização das tabelas)

## Antes de tudo...

- Com as dependências instaladas, criar arquivo de configuração do projeto - um .env na raiz da aplicação - com as credenciais referentes ao banco de dados (USER, PASSWORD, NAME, HOST, PORT e DIALECT)
- npx sequelize-cli init : inicializar o projeto com Sequelize-CLI
- Dentro da pasta config, renomei o arquivo config.json para config.js e altere seu conteúdo para utilizar as credenticiais inseridas no .env

## Criando uma Migration

- npx sequelize-cli migration:generate --name nome_da_migration: isso vai criar uma pasta migrations no seu projeto e dentro dela estará o primeiro arquivo de migration.

Toda migration apresenta um up e um down, referente ao script de migration e o rollback mesma. Isso permite que uma migration volte para sua versão anterior.

## Executando a migration

- npx sequelize-cli db:migrate : no banco de dados deve conter a [tabela criada](https://github.com/almdanddre/sequelize-nodejs/blob/main/migrations/20221025183104-create-clientes.js).

## Alterando uma tabela

- npx sequelize-cli migration:generate --name nova_migration : internamente, você pode adicionar uma coluna no [up](https://github.com/almdanddre/sequelize-nodejs/blob/main/migrations/20221025184709-alter-clientes-telefone.js).

## Mais detalhes...
[LuizTools](https://www.luiztools.com.br/post/tutorial-de-migrations-com-nodejs-e-sequelize/)
