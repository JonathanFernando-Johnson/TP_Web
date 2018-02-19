import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private chmpserv: ChampionService){}

    ngOnInit(){
        this.chmpserv.getChampion();
    }
}
