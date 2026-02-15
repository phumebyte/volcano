import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  messages: string[] = [
    'Calculating...',
    'Think I caught the love bug',
    'I love secret admirers...',
    'Lots of love loading'
  ];

  currentMessage: string = this.messages[0];
  messageIndex: number = 0;
  fadingOut: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startMessageCycle();

    // After 20 seconds, navigate to results
    setTimeout(() => {
      this.router.navigate(['/results']);
    }, 20000);
  }

  startMessageCycle(): void {
    setInterval(() => {
      this.fadingOut = true;

      setTimeout(() => {
        this.messageIndex = (this.messageIndex + 1) % this.messages.length;
        this.currentMessage = this.messages[this.messageIndex];
        this.fadingOut = false;
      }, 700); // matches CSS transition duration
    }, 3500); // cycle every 3.5s
  }
}
