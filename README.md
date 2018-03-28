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
- shared: podemos criar uma pasta de compartilhamento para recurso compartilhados. Por exemplo uma classe que vai server como modelo de objetos para aplicação.
Quando criamos uma classe que vai servir de modelo e nao é um componente utilizamos o *.model.ts


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
Dessa outra maneira com podemos quebrar linhas para a forma inline
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

    ### Ciclo de vida dos componentes
        - LifeCycle Hooks são métodos pre-definidos do Angular.
        - Todos os métodos são executados após a construção do nosso componente, ou seja, logo após o constructor.
        - Para utilizá-los é necessário importá-los do core do Angular.
        - Realizar o implements das interfaces.
        - ngOnChanges(): é disparado logo depois do construtor, podemos capturar as mudanças desse componente antes da inicialização do componente. Esse método é executado sempre que atributos de componentes pais são atualizados. Sempre que existe @Input() dos dados esse método é disparado.
        - ngOnInit(): temos o componente iniciado e decorado com variaveis inputadas, ou seja antes mesmo do template da aplicação conseguimos trazer dados. O método é executado apenas uma vez quando o componente é iniciado.
        - ngOnDestroy(): é chamado no momento que um componente deixa de ser utilizado na aplicação.



## Instalando o Bootstrap
- http://getbootstrap.com/docs/4.0/getting-started/download/
- Instalar como dependencia é uma opção boa.
- feito isso devemos incluir o bootstrap como um style global, para isso temos que ir até o arquiv angular-cli.json e adicionar em "styles" o caminho do arquivo bootstrap.

## Databinding
- Comunicação entre o HTML(template/view) e a classe(componente) ou também entre componentes.
- One-Way-Binding: comunicao de mao unica. 
    - Para o Componente se comunicando com o Template podemos utilizar os recursos Property binding e String Interpolation.
        - String interpolation (bigode bigode rs): ``` {{ data }} ```
            Faz com que o atributo da classe seja impresso no template.
            Permite a inclusao de atributos e expressoes em qualquer lugar do nosso template.
        - Property Binding: ``` [property] = "data" ```
            Faz com que um atributo do HTML tenha seu determinado valor baseado em um atributo da classe.
            O objetivo dele é afetar atributos e elementos HTML, fazendo com que os valores sejam definidos baseado em variaveis da classe do componente.
            ``` <img [src]="url_img"> ```
            Assim o valor url_img é atributio a propriedade src.
    - Para capturar eventos do Template e utilizar no componente, utilizamos o Event binding.
        - Event Binding: ``` (event) = "expression" ```
            Atribuimos no HTML um determinado evento junto com uma expressao que é uma funcao que corresponde com um método da classe do componente.
            Temos condicoes de recuperar eventos disparados no template e com isso executar métodos da classe do componete. input, click, focus, keyup e etc...
            O evento input é disparado quando à alguma interacao em um campo de texto.
            ``(input)="atualizaResposta()"``
            Já $event ``(input)="atualizaResposta($event)"`` captura o estado do elemento no DOM no momento que o evento é disparado.
            Quando possuimos um $event como parametro no nosso método temos que receber como parametro do tipo Event.
- Two-Way-Binding: comunicacao de mao dupla, ou seja se disparar uma ação do template ou do componente ambos vão reagir a esta ação. Ou seja, nos temos uma ação originada do Template HTML que ao evoluir algum atributo da nossa classe impacte novamente no Template.
Exemplo: no this.resposta estamos recebendo o evento do html, se voltarmos para o html fazendo um String interpolation dessa resposta, o HTML vai esta tendo um novo impacto.
`` this.resposta = ((<HTMLInputElement>resposta.target).value);``
``<p> {{ resposta }} </p>``

- @Input: Property binding do pai para filho.
    - Decorar a variável com @Input()
    ```  @Input()  public progresso: number = 25;```
    - Importar o módulo do core do Angular: Input
    - Dessa forma o meu componente possui uma variável que aceita parametros externos definidos no momento da instancia do componente.
    - Através do Property Binding, no template do componente pai, vamos definir [filho]="pai" .
    ``` [progresso]="progresso" ```
- @Output: Event binding de filho para o pai.
    - O objeto do filho que contém um atributo do tipo EventEmitter junto com @Output, é retirado do componente filho e encaixado no contexto do componente pai.
    - Fazer import EventEmitter
    - Criar variavel instanciando EventEmitter ```public encerrarJogo = new EventEmitter();``
    - Fazer a variavel emitir um evento de acordo com as regras de negocio, podendo tb passar um parametro para ela.
    ``this.encerraJogo.emit('vitoria');``
    - Para fazer esse atributo que emitiu o evento sair do contexto do componente devemos decoralo com @Output, para utiliza-lo também tem que importar do core do Angular.
    - O proximo passo é fazer um databinding no template do componente pai.
    ``<app-painel (encerrarJogo)="encerrarJogo($event)"></app-painel>``


## Diretivas
- São funcionalidades que manipulam o comportamento de elementos HTML no DOM.
    - Componentes: diretivas com template.
    - Estruturais: ngFor, ngIf.... (diretivas que criam estruturas html modificando o template)
    - Atributos: diretivas aplicadas a atributos de elementos HTML.

    ### Diretivas Estruturais
    ``<taghtml *ngFor="declararvariavel of array"/>``
    Após declararmos a tag html ela sera repetida de acordo com o numero de for.
    Também é possível acessar os atributos do objeto declarado.
    ``<taghtml *ngFor="declararvariavel of array" [src]="declararvariavel.exibeCoracao()" />``

    #### ngIf
    - No ngIf também podemos utilizar o recurso de else, ou seja podemos apontar para um determinado template que sera exibido se for false.
    `` <div *ngIf="jogoEmAndamento; else referencia">``
    Exemplo:
    `` <div *ngIf="jogoEmAndamento; else fimDeJogo">``
    Com base nessa referencia nos criamos uma outra diretiva ng-template, ela funciona como template mas sem um componente.
    `` <ng-template #fimDeJogo></ng-template> ``

## Mock
- O mock contém instâncias dos objetos baseados na classe modelo.

## Mais dicas
- Quando declaramos uma variável sem incializá-la automaticamente ela passa a ter o valor undefined.









