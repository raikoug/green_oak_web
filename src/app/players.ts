export class Players {
    players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    add_player(player: Player){
        this.players.push(player);
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
    ex: string;
    pensionato_in: string;
    hobby: string;
    circolo: string;
    id: number;

    constructor(name: string, cognome: string, soprannome: string, ex: string, pensionato_in: string, hobby: string, circolo: string,
                id: number, fastidio?: number, scenata?: boolean, spocchia?: number, pettegolezzo?: boolean, scenate_fatte?: number, 
                necrologio?: boolean, parole_sagge?: boolean, pettegolezzi?: string[]) {
        this.name = name;
        this.fastidio = fastidio || 0;
        this.scenata = scenata || false;
        this.spocchia = spocchia || 0;
        this.pettegolezzo = pettegolezzo || false;
        this.scenate_fatte = scenate_fatte || 0;
        this.necrologio = necrologio || false;
        this.parole_sagge = parole_sagge || false;
        this.pettegolezzi = pettegolezzi || [];
        this.cognome = cognome;
        this.soprannome = soprannome;
        this.ex = ex;
        this.pensionato_in = pensionato_in;
        this.hobby = hobby;
        this.circolo = circolo;
        this.id = id;
    }
}