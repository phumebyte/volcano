import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-love-calculator',
  templateUrl: './love-calculator.component.html',
  styleUrls: ['./love-calculator.component.css']
})
export class LoveCalculatorComponent {

  constructor(private router: Router) {}

  submitAnswer(): void {
    const inputElement = document.getElementById('secret-lover') as HTMLInputElement;
    const value = inputElement.value.trim();

    if (value) {
      // Save to local storage
      localStorage.setItem('loveAnswer', value);

      // Navigate to home or another route
      this.router.navigate(['/loading']);
    } else {
      // Do nothing if input is empty
      alert('Please enter a name before submitting!');
    }
  }
}
