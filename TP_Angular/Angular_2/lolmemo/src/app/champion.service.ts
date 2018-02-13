import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ChampionService {

  constructor( private http: HttpClient ) { }

    private champUrl = 'https://euw1.api.riotgames.com/lol/platform/v3/champions?api_key=RGAPI-111ce6a3-37e0-4a6d-87a6-7f22bdbcd7b6';  // URL to web api


    getChamps () {
        return this.http.get(this.champUrl)
            .subscribe(res => console.log(res.json()));
            /*.pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getChamps', []))
            );*/
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
