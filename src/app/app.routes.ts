import { Routes } from '@angular/router';
import { TakenComponent } from './pages/taken/taken.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'taken', component: TakenComponent },
    { path: 'single', component: SingleComponent }
];
