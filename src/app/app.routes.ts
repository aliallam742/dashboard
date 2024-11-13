import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: "mainlayout", pathMatch: 'full' },
    {
        path: 'mainlayout', loadComponent: () => import('./featuer/mainlayout/mainlayout.component').then((c) => c.MainlayoutComponent), children: [
            { path: '', redirectTo: 'graph', pathMatch: 'full' },
            { path: 'graph', loadComponent: () => import('./featuer/mainlayout/components/graph/graph.component').then(c => c.GraphComponent) },
            { path: 'list', loadComponent: () => import('./featuer/mainlayout/components/list/list.component').then(c => c.ListComponent) }
        ]
    }
];
