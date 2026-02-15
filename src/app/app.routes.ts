import { Routes } from '@angular/router';
import { SingleComponent } from './pages/single/single.component';
import { SplashComponent } from './pages/splash/splash.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SweetValentineComponent } from './components/sweet-valentine/sweet-valentine.component';
import { LoveCalculatorComponent } from './components/love-calculator/love-calculator.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ResultsComponent } from './components/results/results.component';
import { MessageComponent } from './pages/message/message.component';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' }, // default route
  { path: 'splash', component: SplashComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'single', component: SingleComponent },
  { path: 'sweet-valentine', component: SweetValentineComponent }, 
  { path: 'love-calculator', component: LoveCalculatorComponent },
  { path: 'loading', component: LoadingComponent }, 
  { path: 'results', component: ResultsComponent }, 
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: 'splash' } // wildcard fallback
];
