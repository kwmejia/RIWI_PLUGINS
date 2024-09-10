import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  public applySound(sound: string) { 
    const audio = new Audio();
    audio.src = `./assets/sounds/${sound}.wav`;
    audio.load();
    audio.play();
  }
}
