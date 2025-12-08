import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TicketComponent } from './main/ticket/ticket.component';
import { TicketDetailsComponent } from './main/ticket/ticket-details/ticket-details.component';
import { TicketNewComponent } from './main/ticket/ticket-new/ticket-new.component';

export const routeConfig: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'kanban', loadComponent: () => import('./main/kanban/kanban.component').then(c => c.KanbanComponent)
            },
            {
                path: 'ticket-details/:id', loadComponent: () => import('./main/ticket/ticket-details/ticket-details.component').then(c => c.TicketDetailsComponent)
            },
            {
                path: 'ticket-new', loadComponent: () => import('./main/ticket/ticket-new/ticket-new.component').then(c => c.TicketNewComponent)
            },
            {
                path: 'ticket', loadComponent: () => import('./main/ticket/ticket.component').then(c => c.TicketComponent)
            },
            {
                path: 'profile', loadComponent: () => import('./main/profile/profile.component').then(c => c.ProfileComponent)
            },
            {
                path: 'team', loadComponent: () => import('./main/team/team.component').then(c => c.TeamComponent)
            },
            {
                path: '**', pathMatch: 'full', redirectTo: ''
            }
        ]
    },
];

export default routeConfig;