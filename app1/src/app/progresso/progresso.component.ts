import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

/**
 * Também é possível no componente do pai definir no template o pai como xyz por exemplo: [nomedanovavariavel]="progresso"
 * e informar o @Input que este é o atributo que devera ser usado para a variavel progresso.
 * @Input('nomedanovavariavel')
 */
  @Input()
  public progresso: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
