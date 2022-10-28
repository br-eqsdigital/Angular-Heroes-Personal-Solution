import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('heroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h=> h.id==id)!;
    this.messageService.add(`heroService: fetched hero id=${id}`);
    return  of(hero)
  }
  /*private log(message: string) {
    this.messageService.add('HeroService: §(message)');
  }*/
}
