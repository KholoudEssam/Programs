import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Programs';
  searchWord: string;

  getSearchWord(word: string) {
    this.searchWord = word;
  }
}
