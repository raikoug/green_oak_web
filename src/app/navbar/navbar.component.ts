import { Component } from '@angular/core';
import { Carta, Mazzo } from '../mazzo';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Player, Players  } from '../players';

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


  change_component(component: String){
    this.actual_component = component;
  }

  SetConsenso(){
    this.consenso = true;
    // create cookie option for never expire cookie
    let cookieOptions: CookieOptions = {expires: new Date('2100-12-31')};
    this.cookieService.put("consenso", "true", cookieOptions);
  }

  SalvaPlayers(){
    // create cookie option for never expire cookie
    let cookieOptions: CookieOptions = {expires: new Date('2100-12-31')};
    this.cookieService.put("players", JSON.stringify(this.players.players), cookieOptions);
  }

}
