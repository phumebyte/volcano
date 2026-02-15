import { Routes } from '@angular/router';
import { SingleComponent } from './pages/single/single.component';
import { SplashComponent } from './pages/splash/splash.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SweetValentineComponent } from './components/sweet-valentine/sweet-valentine.component';
import { LoveCalculatorComponent } from './components/love-calculator/love-calculator.component';
import { ResultsComponent } from './components/results/results.component';
import { MessageComponent } from './pages/message/message.component';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' }, // default route
  { path: 'start', component: SplashComponent },
  { path: 'valentine', component: LandingComponent },
  { path: 'single', component: SingleComponent },
  { path: 'sweet-valentine', component: SweetValentineComponent }, 
  { path: 'love-calculator', component: LoveCalculatorComponent },
  { path: 'results', component: ResultsComponent }, 
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: 'start' } // wildcard fallback
];
