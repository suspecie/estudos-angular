import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;


  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      //trocar pergunda da rodaa
      this.rodada++;
      this.atualizaRodada();
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);

        //limpa texto da rodada
    this.resposta = '';
    } else {
      alert('Tradução esta errada')
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }

}
