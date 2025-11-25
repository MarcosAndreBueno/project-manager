import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TicketComponent } from './main/ticket/ticket.component';

export const routeConfig: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'kanban', loadComponent: () => import('./main/kanban/kanban.component').then(c => c.KanbanComponent)
            },
            {
                path: 'ticket', loadComponent: () => import('./main/ticket/ticket.component').then(c => TicketComponent)
            }
        ]
    },
];

export default routeConfig;