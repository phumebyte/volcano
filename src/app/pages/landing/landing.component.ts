import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
    ngOnInit(): void { 
      const noBtn = document.querySelector('.Yes-Valentine') as HTMLElement; 
      const buttons = document.querySelector('.buttons') as HTMLElement; 
      
      noBtn.addEventListener('click', () => { 
        noBtn.style.display = 'none'; 
        buttons.classList.add('center-no');  
      }); 
    }
}
