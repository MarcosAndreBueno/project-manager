import { Injectable } from "@angular/core";
import { kanbanConfig } from "../mock/kanban.mock";
import { Kanban } from "../entities/config";

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {

    public getKanbanConfigurations(): Kanban {
        return kanbanConfig;
    }
}