import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private _messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    //accessing the messageService function add and sending in a string var
    this._messageService.add('HeroService: Hero ASSEMBLE!')
    return of(HEROES);
  }
}
