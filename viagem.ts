class Viagem{
    constructor(public tempoGasto:number, public velocidadeMedia:number, public rendimentoVeiculo:number) {}

    distancia(){
        //console.log(`Nome: ${this.tempoGasto * this.velocidadeMedia}`)
        return this.tempoGasto * this.velocidadeMedia
    }

    consumo () {
        //console.log(`Nome: ${this.distancia() / this.rendimentoVeiculo}`)
        return this.distancia() / this.rendimentoVeiculo    
    }
}