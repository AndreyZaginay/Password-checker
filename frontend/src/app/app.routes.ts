import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./password-checker/password-checker.component').then(m => m.PasswordCheckerComponent),
    }
];
