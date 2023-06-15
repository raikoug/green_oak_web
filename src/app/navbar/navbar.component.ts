import { Component } from '@angular/core';
import { Carta, Mazzo } from '../mazzo';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Player, Players  } from '../players';
import { effetto } from '../effetti';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cookieService: CookieService){}


  ngOnInit(){
    this.mazzo.initialize();
    // get consent
    this.consenso = this.cookieService.get("consenso") == "true";

    if (this.consenso == true) {
      // renew expiration
      this.SetConsenso()

      const carta = this.mazzo.pesca();
      this.show_briscola(carta)

    }
    // log the consenso result
    console.log("consenso: " + this.consenso);

    // get players
    let players_cookie = this.cookieService.get("players");
    if (players_cookie != null) {
      this.players = new Players(JSON.parse(players_cookie));
      // renew expiration
      this.SalvaPlayers();
    }
  }

  actual_component: String = "mainboard";
  mazzo: Mazzo = new Mazzo();
  consenso : Boolean = false;
  players = new Players([])
  briscola: Carta = {} as Carta;
  carta_pescata: Carta = {} as Carta;
  effetti : effetto[] = [];
  crea_personaggio : boolean = false;

  // ngmodel varaibles per creazione personaggio
  crea_pg_nome : string = "";
  crea_pg_cognome : string = "";
  crea_pg_soprannome : string = "";
  crea_pg_ex : string = "";
  crea_pg_pensionato : string = "";
  crea_pg_hobby : string = "";
  crea_pg_circolo : string = "";



  change_component(component: String){
    this.actual_component = component;
  }

  SetConsenso(){
    this.consenso = true;
    // create cookie option for never expire cookie
    let cookieOptions: CookieOptions = {expires: new Date('2100-12-31')};
    this.cookieService.put("consenso", "true", cookieOptions);

    this.mescola();
  }

  SalvaPlayers(){
    // create cookie option for never expire cookie
    let cookieOptions: CookieOptions = {expires: new Date('2100-12-31')};
    this.cookieService.put("players", JSON.stringify(this.players.players), cookieOptions);
  }

  show_briscola(carta?: Carta){
    this.briscola = carta!;

  }

  show_carta(carta: Carta){
    this.carta_pescata = carta;
  }

  mescola(){
    const carta = this.mazzo.mescola();
    this.show_briscola(carta);
    this.carta_pescata = {} as Carta;
    this.effetti = [];

  }

  crea_piggi(){
    this.crea_personaggio = true;
  }

  get_players_last_id(){
    let last_id = 0;
    for (let player of this.players.players){
      if (player.id > last_id){
        last_id = player.id;
      }
    }
    return last_id;
  }

  player_form_crea(){
    let id = this.get_players_last_id() + 1;
    const player = new Player(this.crea_pg_nome, 
                              this.crea_pg_cognome,
                              this.crea_pg_soprannome,
                              this.crea_pg_ex,
                              this.crea_pg_pensionato,
                              this.crea_pg_hobby,
                              this.crea_pg_circolo,
                              id = id);
    this.players.add_player(player);

    this.SalvaPlayers();
    console.log(this.players.players);
    
  }

  pesca(player?: Player){
    const carta = this.mazzo.pesca();
    this.show_carta(carta);

    // clear the div effetti_board
    this.effetti = [];

    if (carta.seme == this.briscola.seme){
      this.effetti.push({"classe": "alert-success", "messaggio": "Briscola!"});
      this.effetti.push({"classe": "alert-success", "messaggio": "Successo"});

      
    }
    else{
      this.effetti.push({"classe": "alert-warning", "messaggio": "Fallimento"});
    }
    
  }

  crea_pg_can_save(){
    return !(this.crea_pg_nome != "" && this.crea_pg_cognome != "" && this.crea_pg_soprannome != "" && this.crea_pg_ex != "" && this.crea_pg_pensionato != "" && this.crea_pg_hobby != "" && this.crea_pg_circolo != "");
    
  }


}
