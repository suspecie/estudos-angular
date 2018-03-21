# estudos-angular
Estudos do curso Desenvolvimento Web com ES6, TypeScript e Angular4 da Udemy

Curso: Estudos do curso Desenvolvimento Web com ES5, TypeScript e Angular4 da Udemy 

Créditos: Jorge Sant Ana https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/

## Angular CLI
 - ferramenta de linha de comando que automatiza o processo de criacao.
 - comandos:  https://cli.angular.io/
 - ng new : cria um novo projeto
 - ng server / ng serve : gera o build do projeto e vai subir um servidor para que possamos testar nossa aplicação. Este comando deverá ser rodado dentro da pasta do projeto que foi gerado.

## Atualizando Angular CLI

``` npm update -g @angular/cli ```

## Verificando a versão do Angular CLI

``` ng -v ```

## Como resolver alguns problemas
Alguns problemas no momento do build podem ser resolvidos utilizando alguns métodos.

- Atualizando as dependências: ``` npm install ``` ou ``` yarn install ```
- Apagando a pasta node_modules e rodando ``` npm install ``` ou ``` yarn install ```
- Atualizando a verão do Angular CLI