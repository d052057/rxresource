import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Movie {
  id: number,
  title: string,
  param: string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  
  getMovieMenu(): Observable<any> {
    return of(this.http.get<Movie[]>("http://localhost:4200/json/menus/movies/menu.json"))
  }
  
}
