import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

import { Joke } from './joke';
// import { JOKES } from './mock-heroes';
export const JOKES: Joke[] = [];


@Injectable()
export class JokeService {

  constructor(private messageService: MessageService) { }

  getJokes(): Observable<Joke[]> {
    this.messageService.add('JokeService: initialized jokes');
    return of(JOKES);
  }
}
