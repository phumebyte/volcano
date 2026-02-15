import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.css']
})
export class ConfettiComponent implements OnInit {
  ngOnInit(): void {
    const confettiContainer = document.querySelector('.confetti-container') as HTMLElement;
    if (!confettiContainer) return;

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('pixel-heart');

      const colors = ['#FF0000', '#FF69B4', '#FFC0CB', '#FFFFFF'];
      heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Random horizontal position
      heart.style.left = Math.random() * 100 + 'vw';

      // Random animation duration
      const duration = (Math.random() * 3 + 2).toFixed(2) + 's';
      heart.style.animationDuration = duration;

      confettiContainer.appendChild(heart);

      // Remove after animation completes
      setTimeout(() => heart.remove(), parseFloat(duration) * 1000);
    }

    // Generate hearts continuously
    setInterval(createHeart, 200);
  }
}
