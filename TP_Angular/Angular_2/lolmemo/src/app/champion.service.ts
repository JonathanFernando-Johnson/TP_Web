import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChampionService {

    /*data : string;

    constructor( private http: HttpClient, private htttp: Http) {
        console.log(" --- CHAMPION SERVICE --- ");
    }*/

    private champURL = 'https://euw1.api.riotgames.com/lol/platform/v3/champions?api_key=RGAPI-9144a26d-9c3d-48b5-bcf1-c932271e1fbe';  // URL to web api

    private champJSON = '../champions.json';

    /*getChamps () {
        console.log(" --- CHAMPION SERVICE 2 --- ");
        this.htttp.get(this.champURL)
            .subscribe((res:Response) => this.data = res.json());

        console.log(this.data);

        /*return this.http.get(this.champUrl)
            .subscribe(res => console.log(res.json()));
            .pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getChamps', []))
            );
    }*/

    constructor(private http: Http) {
         var obj;
         this.getChamps().subscribe(data => obj=data, error => console.log(error));
    }

    getChamps(): Observable<any> {
         return this.http.get(this.champJSON).map((res:any) => res.json());
    }
}
