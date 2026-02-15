import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void { 
    const audio = document.getElementById('bg-audio') as HTMLAudioElement; 
    if (audio) { audio.volume = 0.2; // set soft volume (20%) 
  } }
}
