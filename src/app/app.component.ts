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
    this.pencil.size = 2;
  }

  write(textToAdd: string) {
    this.paper = this.paper.concat(textToAdd);

    const textWithoutSpaces = textToAdd.replace(/\s/g, '');
    const uppercaseLetters = textToAdd.replace(/[^A-Z]/g, '');
    const pointsForLowercaseLetters = (textWithoutSpaces.length - uppercaseLetters.length);
    const pointsForUppercaseLetters = (uppercaseLetters.length * 2);

    this.pencil.pointDurability -= pointsForLowercaseLetters + pointsForUppercaseLetters;
  }

  sharpen() {
    this.pencil.pointDurability = 10;
    this.pencil.size -= 1;
  }
}
