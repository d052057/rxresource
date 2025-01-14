import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  
  getMovieMenu(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/json/menus/movies/menu.json")
  }
  
}
