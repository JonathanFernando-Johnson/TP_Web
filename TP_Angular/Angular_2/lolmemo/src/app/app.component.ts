import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ChampionService } from './champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor( private championService: ChampionService ) { this.getChampions(); }

    getChampions(): Observable<any> {
        return this.championService.getChamps();
    }
}
