import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [CommonModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  progress: number = 0;
  target: number = 0;
  intervalId: any;
  storedName: string = '';
  showContinue: boolean = false;

  ngOnInit(): void {
    const name = localStorage.getItem('loveAnswer');
    if (name) {
      this.storedName = name.toUpperCase(); // make all caps
    }

    // Names that always get 100%
    const always100 = ['PHUME', 'NEO', 'MICAELLA'];

    if (this.storedName && always100.includes(this.storedName)) {
      this.target = 100;
    } else {
      this.target = Math.floor(Math.random() * 51) + 50; // random between 50–100
    }

    this.animateProgress();
  }

  animateProgress(): void {
    this.intervalId = setInterval(() => {
      if (this.progress < this.target) {
        this.progress++;
      } else {
        clearInterval(this.intervalId);
        this.showContinue = true; // show button when animation finishes
      }
    }, 100); // speed of animation
  }
}
