var Aluno = /** @class */ (function () {
    // nome: string
    // constructor(public nome:string) {
    //     this.nome = nome 
    // }
    function Aluno(nome) {
        this.nome = nome;
    }
    //Método
    Aluno.prototype.exibir = function () {
        console.log("Nome: " + this.nome);
    };
    return Aluno;
}());
