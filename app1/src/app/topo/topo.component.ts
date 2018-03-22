import { Component } from '@angular/core';

/**
 * O @Component é chamado de declaration
 * já os parametros, como selector por exemplo são chamados de metadados
 * Quando criamos um componente é muito importante ter um template associado a ele
 */
@Component({
  selector: 'app-topo', // no html vamos instanciar esse seletor
  //selector:'[app-topo]',
  //selector:'.app-topo',
  templateUrl: './topo.component.html', // esse é um template externo
  //template: '<p>Esse é o componente TOPO inline!</p>'
  /*template: `<p>
                Esse é o componente TOPO inline quebrado!
              </p>`*/
  //styles: ['.exemplo { color:red }']
  /*styles: [`.exemplo {
            color:red
          }`]*/
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {

}
