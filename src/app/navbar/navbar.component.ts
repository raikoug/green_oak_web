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


}
