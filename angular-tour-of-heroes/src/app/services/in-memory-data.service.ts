import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const heroes = HEROES;
    return {heroes}
  }

  constructor() { }
}
