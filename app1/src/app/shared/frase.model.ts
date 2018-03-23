export class Frase {
/**
 * Ao inves de declararmos os atributos la fora por exemplo public fraseEng: string;
 * colocamos o public direto no construtor, isso faz com que
 * nao seja necessário declarar os atributos acima e também de dentro
 * Assim o construtor ja vai saber que esses parametros ja vao ser criado como parametro da classe
 * Essa pratica deixa o codigo menos verboso
 */
  constructor(public fraseEng: string, public frasePtBr: string) {}


}
