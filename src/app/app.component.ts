import { Component, OnInit } from '@angular/core';
import { Pencil } from './models/pencil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PairProgramKata';
  paper = '';
  pencil = new Pencil();

  constructor() {
    this.pencil.pointDurability = 10;
  }

  write(textToAdd: string) {
    this.paper = this.paper.concat(textToAdd);

    const pointsToSubtract = textToAdd.length;

    this.pencil.pointDurability -= pointsToSubtract;
  }
}
