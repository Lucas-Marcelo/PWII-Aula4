var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        //console.log(`Nome: ${this.tempoGasto * this.velocidadeMedia}`)
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.consumo = function () {
        //console.log(`Nome: ${this.distancia() / this.rendimentoVeiculo}`)
        return this.distancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
