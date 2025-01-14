import { Component, ResourceRef, Signal, inject, linkedSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './service/account.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule, JsonPipe} from '@angular/common';
import { map } from 'rxjs';

export interface Movie {
  id: number,
  title: string,
  param: string
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxresource';
  service = inject(AccountService);
  musicMenu: ResourceRef<Movie[]> = rxResource({
    loader:() => this.service.getMovieMenu()
  })
  x: Signal<string | undefined> = linkedSignal(
    () => this.musicMenu.value()?.[0]?.title
  );
  y: Signal<string | undefined> = linkedSignal(
    () => this.musicMenu.value()?.[0]?.param
  );
  z: Signal<number | undefined> = linkedSignal(
    () => this.musicMenu.value()?.[0]?.id
  );
  ngOnInit(): void {
    console.log('x:' + JSON.stringify(this.x));
  }
   
}
