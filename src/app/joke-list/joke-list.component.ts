import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor(private heroService: HeroService, private http: HttpClient) {

  }

  getHeroes(): void {
    // this.jokes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(jokes => this.jokes = jokes);
  }

  toggle(joke: Joke) {
    joke.toggle();
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  ngOnInit() {
    this.getHeroes();
    this.http.get<Icndb>('http://api.icndb.com/jokes/random').subscribe(data => {
      console.log(data.value.joke);
      this.addJoke(new Joke(data.value.joke, ''));
    });

  }

}

interface Icndb {
  type: string;
  value: {
    id: number,
    joke: string
    };
  }
