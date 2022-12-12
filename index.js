function cortarChocolate(n, m) {
    return n * m - 1;
}
function contarLetras(string) {
    var _a, _b;
    var maiusculas;
    var minusculas;
    if (((_a = string.match(/[A-Z]/g)) === null || _a === void 0 ? void 0 : _a.length) != null) {
        maiusculas = string.match(/[A-Z]/g);
    }
    if (((_b = string.match(/[a-z]/g)) === null || _b === void 0 ? void 0 : _b.length) != null) {
        minusculas = string.match(/[A-Z]/g);
    }
    if (maiusculas.length > minusculas.length) {
        return string.toUpperCase();
    }
    else {
        return string.toLowerCase();
    }
}
var Lutador = /** @class */ (function () {
    function Lutador(nome, ataque, vida) {
        this.Nome = nome;
        this.Ataque = ataque;
        this.Vida = vida;
    }
    return Lutador;
}());
function Lutar(lutador1, lutador2, nome) {
    var atacante;
    var defensor;
    if (nome == lutador1.Nome) {
        atacante = lutador1;
        defensor = lutador2;
    }
    else {
        atacante = lutador2;
        defensor = lutador1;
    }
    var continuar = true;
    while (continuar) {
        defensor.Vida -= atacante.Ataque;
        if (defensor.Vida > 0) {
            console.log(atacante.Nome + " ataca " + defensor.Nome + "; " + defensor.Nome + " agora tem " + defensor.Vida + " de vida");
        }
        else {
            console.log(atacante.Nome + " ataca " + defensor.Nome + "; " + defensor.Nome + " agora tem " + defensor.Vida + " de vida e caiu");
            return atacante.Nome + " ganhou!";
        }
        var troca = atacante;
        atacante = defensor;
        defensor = troca;
    }
}
var lutador1 = new Lutador("Diego", 89, 100);
var lutador2 = new Lutador("Roberto", 15, 200);
