function cortarChocolate(n: number, m: number): number{
    return n*m - 1
}

function contarLetras(string: string): string {
    let maiusculas: string[]
    let minusculas: string[]
    if (string.match(/[A-Z]/g)?.length != null) {
        maiusculas = string.match(/[A-Z]/g)
    }
    if (string.match(/[a-z]/g)?.length != null) {
        minusculas = string.match(/[A-Z]/g)
    }

    if (maiusculas.length > minusculas.length) {
       return string.toUpperCase()
    }
    else{
        return string.toLowerCase()

    }
}

class Lutador {
    Nome: string
    Ataque: number
    Vida: number

    constructor(nome: string, ataque: number, vida: number){
        this.Nome = nome
        this.Ataque = ataque
        this.Vida = vida
    }
}

function Lutar(lutador1: Lutador, lutador2: Lutador, nome: string): string{
    let atacante: Lutador
    let defensor: Lutador
    if(nome == lutador1.Nome) {
        atacante = lutador1
        defensor = lutador2
    } else {
        atacante = lutador2
        defensor = lutador1
    }
    let continuar = true
    while(continuar) {
        defensor.Vida -= atacante.Ataque
        if (defensor.Vida > 0) {
            console.log(atacante.Nome + " ataca " + defensor.Nome + "; " + defensor.Nome + " agora tem " + defensor.Vida + " de vida")
        } else {
            console.log(atacante.Nome + " ataca " + defensor.Nome + "; " + defensor.Nome + " agora tem " + defensor.Vida + " de vida e caiu")
            return atacante.Nome + " ganhou!"
        }

        let troca = atacante
        atacante = defensor
        defensor = troca
    }
}

let lutador1 = new Lutador("Diego",89,100)
let lutador2 = new Lutador("Roberto",15,200)