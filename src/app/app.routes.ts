import { Routes } from '@angular/router';
import { TakenComponent } from './pages/taken/taken.component';
import { SingleComponent } from './pages/single/single.component';
import { SplashComponent } from './pages/splash/splash.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    { path: 'splash', component: SplashComponent },
    { path: 'landing', component: LandingComponent},
    { path: 'taken', component: TakenComponent },
    { path: 'single', component: SingleComponent }
];
