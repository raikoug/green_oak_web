import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EffettiComponent } from './effetti/effetti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EffettiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.withOptions()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
