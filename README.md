# estudo-typescript

# Referências
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction

#   Procedimentos Realizados

-  [-] npm init                   :Gerenciador de Pacotes
-  [-] npm add -D typescript      :Dependência de Desenvolvimento
-  [-] npm add express            :Servidor
    -   npm install @types/express --save-dev

## Yarn 
-   https://github.com/gamunu/vscode-yarn
-   https://classic.yarnpkg.com/en/docs/install/#windows-stable
-   [-] npm install --global yarn || 
-   [-] yarn --version  
-   [-] yarn add -D typescript
-   [-] yarn add @types/express -D
-   [-] yarn tsc src/index.ts  - convertendo em js
    -   Sem o arquivo tsconfig.json - foi necessario adicionar ao import o * as no express , porém ao executar o script tsc --init o parametro 
    "esModuleInterop": true, e o intelicence já apontou que não precisava mais da informação anterios.
-   [-] yarn tsc --init



    - https://docs.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1
        -   Get-ExecutionPolicy
        -   Get-ExecutionPolicy -List

