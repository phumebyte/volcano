import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-message',
  imports: [CommonModule, RouterLink],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  showReplay: boolean = false;

  ngOnInit(): void {
    setTimeout(() => { this.showReplay = true; }, 3000);
  }
}
