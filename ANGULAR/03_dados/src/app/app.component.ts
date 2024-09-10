import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  baseUrl: string = '../assets/img'
  leftDice: string = `${this.baseUrl}/dice1.png`;
  rightDice: string = `${this.baseUrl}/dice3.png`;
  isRoll: boolean = false;
  isPair = false;

  public rollDice(): void {
    let stop: number = 1;
    this.isRoll = true;

    const interval = setInterval(() => {
      const num1 = Math.floor(Math.random() * 6) + 1;
      const num2 = Math.floor(Math.random() * 6) + 1;
      this.leftDice = `${this.baseUrl}/dice${num1}.png`;
      this.rightDice = `${this.baseUrl}/dice${num2}.png`;
      stop++;
      if (stop > 15) {
        clearInterval(interval);
        this.isRoll = false;
        if (num1 === num2) this.isPair = true;
      }
    }, 200);
  }
}
