import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    champion : Observable<Champions[]>;

    constructor( private championService: ChampionService ) {}

    ngOnInit(){
        this.getChampions();
    }

    getChampions(): void {
        return this.championService.getChamps();
    }

    console.log(this.getChampions());
}
