import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { KanbanComponent } from "./kanban/kanban.component";

const routes: Routes = [
    {
        path: '', component: MainComponent,
        children: [
            {
                path: 'kanban',
                loadComponent: () => import('./kanban/kanban.component').then(c => c.KanbanComponent)
            }],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }