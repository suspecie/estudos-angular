# estudos-angular
Estudos do curso Desenvolvimento Web com ES6, TypeScript e Angular4 da Udemy

Curso: Estudos do curso Desenvolvimento Web com ES5, TypeScript e Angular4 da Udemy 

Créditos: Jorge Sant Ana https://www.udemy.com/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/

## Angular CLI
 - ferramenta de linha de comando que automatiza o processo de criacao.
 - comandos:  https://cli.angular.io/
 - ng new : cria um novo projeto
 - ng server / ng serve / npm start: gera o build do projeto e vai subir um servidor para que possamos testar nossa aplicação. Este comando deverá ser rodado dentro da pasta do projeto que foi gerado.

## Atualizando Angular CLI

``` npm update -g @angular/cli ```

## Verificando a versão do Angular CLI

``` ng -v ```

## Como resolver alguns problemas
Alguns problemas no momento do build podem ser resolvidos utilizando alguns métodos.

- Atualizando as dependências: ``` npm install ``` ou ``` yarn install ```
- Apagando a pasta node_modules e rodando ``` npm install ``` ou ``` yarn install ```
- Atualizando a verão do Angular CLI

## Estrutura
- node_modules: o Angular é baseado no node e por isso possui a pasta com estas dependências.
- package.json: este arquivo contém as informações de comandos de scrips, ou seja alias para execução de comandos que podemos utilizar na nossa aplicação; dependências da aplicação utilizadas dentro da aplicação, ou seja é o que aplicação precisa para funcionar; dependências de desenvolvimento, que nos ajudam na criação da aplicação, é o que estará no ambiente de desenvolvimento.
- tsconfig.json: arquivo de configuração do TypeScript.
- angular-cli.json: fundamental para parametrizar as informações básicas do projeto.
    - "index": indicação da index do projeto.
    - "main": indicação do bootstrap.
    - "polyfills": recursos que fornecem suporte a funcionalidades novas em browsers antigos.
    - "styles": estilo global da aplicação.
    - "enviroments": variáveis de ambiente.
- src: diretorio que irá conter toda a codificação da aplicação.
- src/assets: onde serão incluidos os arquivos estáticos da aplicação. Imagens, Arquivos Js, Arquivos CSS.
- src/app: onde serão criados os componentes que serão utilizados na aplicação.
- app.module.ts: módulo da aplicação.
- *.component: componentes da aplicação.
- app.component.ts: são as classes, vai controlar o html.
- app.component.html: o html.
- app.component.spec.ts: arquivo de teste.
- app.component.css: arquivo css do componente.
- é importante criarmos diretorios para organizar nossos componentes, isso deve ser feito dentro do diretorio app


## Como tudo funciona
- quando utilizamos o comando ```ng serve``` ele faz um start no webpack.
- webpack é responsável a partir de um determinado ponto recuperar todos os arquivos e transforma em bundles(pacotes), fazendo comque a nossa aplicação se transforme em pequenos pacotes, integrando todo o codigo o maximo possível.
O arquivo inicial é o main.ts é lá que vamos definir o bootstrap da aplicação, ou seja é la que será definido qual o modulo que deverá ser carregado primeiro na nossa aplicação.
- ao rodar o ```ng serve``` ele forma 5 chuncks (5 pedaços) da nossa aplicação: polyfills, main.bundle.js (todos os componentes da aplicação), styles.blundle.js(todos os estilos), vendor.bundle.js (todas as bibliotecas angular), inline.bundle.js (contém os utilitarios necessários para fazer o bootstrap da aplicação e auxilia nos demais carregamntos da nossa aplicação).
- Após isso também é "startado" um servidor de desenvolvimento, e o que vemos é o arquivo index.html. 
- O index.html não possui nenhuma arquivo js, porém essa injeção é feita em tempo de execução e quem faz essa injecão é o webpack.
- o Angular é um framework modulado, precisamos de pelo menos um modulo para que a aplicação funcione.
- o module, contém instruções que irão definir como faremos a criação dos nossos componentes na tela.

## app.component.ts
- styleUrls: arquivos de estilo do componente.
- templateUrl: arquivos de template do componente.
- selector: indica onde o componente deve ser renderizado dentro do index.html .
Instanciando componente no html
```selector: 'app-topo' ``` no html ```<app-topo></app-topo>```
Instanciando componente como atributo
```selector: '[app-topo]' ``` no html ```<div app-topo></div>```
Instanciando componente como classe(cuidado com conflitos de nomes de classe css)
```selector: '.app-topo' ``` no html ```<div class="app-topo"></div>```
- template: é um metadado que permite informar um tamplate inline. 
Dessa maneira não pode quebrar linha
``` template: '<p>Esse é o componente TOPO inline!</p>' ``` 
Dessa outra maneira com `` podemos quebrar linhas para a forma inline
``` template: `<p>```
                ``` Esse é o componente TOPO inline!</p>` ```
- styles: permite informar através de arrays estilos css
``` styles: [' .exemplo { color:red }'] ```
Podendo também quebrar linha
``` styles: [` ```
                ```.exemplo { color:red }```
            ``` `] ```

## Componentes
- O @Component é chamado de declaration
- já os parametros, como selector por exemplo são chamados de metadados
- Quando criamos um componente é muito importante ter um template associado a ele
- pequenas partes lógicas que podem ser utilizadas dentro da aplicação.
- serve para controlar uma parte da tela, que chamamos de view.
- Criando manualmente
    - criar um diretório para o componente dentro de app
    - criar dentro desde novo diretorio o *.component.ts e *.component.html
    - fazer import do Component
    - definir a classe o nome deve ser nomeComponent 
    - decorar essa classe com instrucoes para dizer ao angular que essa classe é um componente @Component()
    - para conseguirmos usar o componente dentro do module que é carregado pela aplicação, precisamos importar dentro do app.module esse novo componente.
    - tb é necessário declarar dentro do app.module o nosso componente
    - instanciar nosso componente dentro de algum lugar na nossa aplicação
- Utilizando o angular cli
    - ``` ng generate component nomedocomponente ``` ou ```ng g c nomedocomponente ```
    Para que nao seja criado determinado arquivo devemos passar um parametro na hora da geração
    ``` ng g c nomedocomponente --spec=false ``` nesse caso o arquivo spec n sera criado






