import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './service/account.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule, JsonPipe} from '@angular/common';
import { map } from 'rxjs';

interface mm {
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
  musicMenu = rxResource({
    loader:() => this.service.getMovieMenu()
  })
  x: any;
  y: any;
  z: any;
  ngOnInit(): void {
    const t = this.musicMenu.value();
    const i: mm = t?.[0]
    this.x = t?.title;
    this.y = t?.param;
    this.z = t?.id;
  
  }
   
}
