class Viagem{
    constructor(public tempoGasto:number, public velocidadeMedia:number, public rendimentoVeiculo:number) {}

    distancia(){
        return this.tempoGasto * this.velocidadeMedia
        //console.log(`Distância: ${this.tempoGasto * this.velocidadeMedia}`)
    }

    consumo () {
        return this.distancia() / this.rendimentoVeiculo
        //console.log(`Consumo: ${this.distancia() / this.rendimentoVeiculo}`)
    }
}