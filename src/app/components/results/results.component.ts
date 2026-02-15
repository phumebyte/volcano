import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  progress: number = 0;
  target: number = 0;
  intervalId: any;
  storedName: string = '';

  ngOnInit(): void {
    const name = localStorage.getItem('loveAnswer');
    if (name) {
      this.storedName = name.toUpperCase(); // make all caps
    }

    // Names that always get 100%
    const always100 = ['PHUME', 'NEO', 'TAKU', 'BONGANI', 'SHAUN', 'MOSEKI', 'KUNDAI'];

    if (this.storedName && always100.includes(this.storedName)) {
      this.target = 100;
    } else {
      this.target = Math.floor(Math.random() * 61) + 60; // random between 60–100
    }

    this.animateProgress();
  }

  animateProgress(): void {
    this.intervalId = setInterval(() => {
      if (this.progress < this.target) {
        this.progress++;
      } else {
        clearInterval(this.intervalId);
      }
    }, 50); // speed of animation
  }
}
