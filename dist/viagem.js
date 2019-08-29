var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.distancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
        //console.log(`Distância: ${this.tempoGasto * this.velocidadeMedia}`)
    };
    Viagem.prototype.consumo = function () {
        return this.distancia() / this.rendimentoVeiculo;
        //console.log(`Consumo: ${this.distancia() / this.rendimentoVeiculo}`)
    };
    return Viagem;
}());
