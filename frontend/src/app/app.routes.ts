import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routeConfig: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'kanban', loadComponent: () => import('./main/kanban/kanban.component').then(c => c.KanbanComponent)
            }
        ]
    },
];

export default routeConfig;