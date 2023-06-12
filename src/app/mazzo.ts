
export interface Carta{
    seme: string;
    valore: number;
    path: string;
    nome: string;
    pescata: boolean;
}

export class Mazzo{
    cards: Carta[] = [];
    constructor(){}

    initialize(){
        this.cards = [];
        let semi = ["bastoni", "coppe", "denara", "spade"];
        let valori = [1,2,3,4,5,6,7,8,9,10];
        let nomi = ["asso", "due", "tre", "quattro", "cinque", "sei", "sette", "fante", "cavallo", "re"];
        for(let seme of semi){
            for(let i = 0; i < valori.length; i++){
                let carta: Carta = {
                    seme: seme,
                    valore: valori[i],
                    path: "assets/carte/" + seme + "/" + valori[i] + ".png",
                    nome: nomi[i] + " di " + seme,
                    pescata: false
                }
                this.cards.push(carta);
            }
        }

    }

    pesca(){
        let index = Math.floor(Math.random() * this.cards.length);
        let carta = this.cards[index];
        this.cards.splice(index, 1);
        return carta;
    }

    mescola(){
        this.initialize();
        let index = Math.floor(Math.random() * this.cards.length);
        let carta = this.cards[index];
        this.cards.splice(index, 1);
        return carta;
    }

    carte_rimaste() : string{
        return this.cards.length.toString();
    }
}
