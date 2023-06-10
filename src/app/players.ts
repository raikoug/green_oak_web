export class Players {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }
}

export class Player {
    name: string;
    fastidio: number;
    scenata: boolean;
    spocchia: number;
    pettegolezzo: boolean;
    scenate_fatte: number;
    necrologio: boolean;
    parole_sagge: boolean;
    pettegolezzi: string[];
    cognome: string;
    soprannome: string;
    ex: boolean;
    pensionato_in: string;
    hobby: string;
    circolo: string;
    id: number;

    constructor(name: string, fastidio: number, scenata: boolean, spocchia: number, pettegolezzo: boolean, scenate_fatte: number, 
                necrologio: boolean, parole_sagge: boolean, pettegolezzi: string[], cognome: string, soprannome: string, 
                ex: boolean, pensionato_in: string, hobby: string, circolo: string, id: number) {
        this.name = name;
        this.fastidio = fastidio;
        this.scenata = scenata;
        this.spocchia = spocchia;
        this.pettegolezzo = pettegolezzo;
        this.scenate_fatte = scenate_fatte;
        this.necrologio = necrologio;
        this.parole_sagge = parole_sagge;
        this.pettegolezzi = pettegolezzi;
        this.cognome = cognome;
        this.soprannome = soprannome;
        this.ex = ex;
        this.pensionato_in = pensionato_in;
        this.hobby = hobby;
        this.circolo = circolo;
        this.id = id;
    }
}