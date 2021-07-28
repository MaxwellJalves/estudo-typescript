# estudo-typescript

# Referências
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction

#   Procedimentos Realizados

-  [x] npm init                   :Gerenciador de Pacotes
-  [x] npm add -D typescript      :Dependência de Desenvolvimento
-  [x] npm add express            :Servidor
    -   npm install @types/express --save-dev

## Yarn 
-   https://github.com/gamunu/vscode-yarn
-   https://classic.yarnpkg.com/en/docs/install/#windows-stable
-   [x] npm install --global yarn || 
-   [x] yarn --version  
-   [x] yarn add -D typescript
-   [x] yarn add @types/express -D
-   [x] yarn tsc src/index.ts  - convertendo em js
    -   Sem o arquivo tsconfig.json - foi necessario adicionar ao import o * as no express , porém ao executar o script tsc --init o parametro 
    "esModuleInterop": true, e o intelicence já apontou que não precisava mais da informação anterios.
-   [x] yarn tsc --init

##  Propriedades tsconfig

-   [x] outDir - Local que irá ficar o código transpilado './'  :: './dist'



    - https://docs.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1
        -   Get-ExecutionPolicy
        -   Get-ExecutionPolicy -List

## Buscar Conhecimento

-  [ ] https://typeorm.io/#/entities       - ORM typeScript
-  [ ] ts-node-dev                   yarn add ts-node-dev --dev
  

