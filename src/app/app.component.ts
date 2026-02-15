import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isPhone: boolean = true;

  ngAfterViewInit(): void {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.2; // soft volume
    }

    // Check screen width
    this.isPhone = window.innerWidth <= 480;
  }
}
