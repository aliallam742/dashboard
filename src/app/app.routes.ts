import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: "mainlayout", pathMatch: 'full' },
    { path: 'mainlayout', loadComponent: () => import('./featuer/mainlayout/mainlayout.component').then((c) => c.MainlayoutComponent) }
];
