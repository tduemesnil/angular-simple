import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { JokeApi } from '../interfaces';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor(private jokeService: JokeService, private http: HttpClient) {

  }

  getJokes(): void {
    // this.jokes = this.heroService.getHeroes();
    this.jokeService.getJokes()
      .subscribe(jokes => this.jokes = jokes);
  }

  toggle(joke: Joke) {
    joke.toggle();
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  ngOnInit() {
    this.getJokes();

    this.http.get<JokeApi[]>('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten').subscribe(data => {
      console.log(data.length);
      data.forEach(element => {
        this.addJoke(new Joke(element.setup, element.punchline, element.type, element.id));
      });
    });
  }

}

