import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single',
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent implements OnInit{

  ngOnInit(): void { 
    const noBtn = document.querySelector('.No-Valentine') as HTMLElement; 
    const buttons = document.querySelector('.buttons') as HTMLElement; 
    
    noBtn.addEventListener('click', () => { 
      noBtn.style.display = 'none'; 
      buttons.classList.add('center-yes');  
    }); 
  }
}
