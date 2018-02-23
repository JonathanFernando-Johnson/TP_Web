import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChampionService {

    constructor(private http: Http) {
        this.getChampion().subscribe(res => data = res)
    }

    getChampion() {
        return this.http.get('../data/champions.json').map((res:Response) => res.json());
    }
}
