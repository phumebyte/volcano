import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
    ngOnInit(): void { 
      const YesBtn = document.querySelector('.Yes-Valentine') as HTMLElement; 
      const buttons = document.querySelector('.buttons') as HTMLElement; 
      
      YesBtn.addEventListener('click', () => { 
        YesBtn.style.display = 'none'; 
        buttons.classList.add('center-no');  
      }); 
    }

    congratsVisible: boolean = false; 
    
    showCongratsMessage(): void { 
      this.congratsVisible = true; 
    }
}
