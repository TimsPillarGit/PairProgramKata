import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PairProgramKata';
  paper = '';

  write(textToAdd: string) {
    this.paper = this.paper.concat(textToAdd);
  }
}
