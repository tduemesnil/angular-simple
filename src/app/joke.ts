export class Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string, type?: string, id?: number) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
    this.id = id;
    this.type = type;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
