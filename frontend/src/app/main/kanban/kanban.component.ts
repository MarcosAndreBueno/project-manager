import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { combineLatest, delay, Observable, of } from 'rxjs';
import { Ticket } from '../../entities/ticket';
import { TicketStatus } from '../../entities/ticket-status';
import { UserConfig } from '../../entities/user-config';
import { StatusService } from '../../service/status.service';
import { TicketService } from '../../service/ticket.service';
import { UserConfigurationService } from '../../service/user-configuration.service';
import { NormalizeStringIfExceeded } from '../../utils/filtro.pipe';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnInit {

  public statusEnums!: TicketStatus[];
  public userConfiguration?: UserConfig;
  public kanbanColConfig: number[] = [];
  public tickets$: Observable<Ticket[]> = of([]);

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor(
    private ticketService: TicketService,
    private configService: UserConfigurationService,
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
    this.tickets$ = this.ticketService.getTickets();

    this.statusService.getStatusEnums().subscribe(s => {
      this.statusEnums = s;
    });
    this.configService.getUserConfigurations(1).pipe(delay(1000)).subscribe(config => {
      this.userConfiguration = config;
      this.kanbanColConfig = this.userConfiguration.kanbanColConfig;
    });
  }

  addColumn(id: number) {
    if (this.kanbanColConfig.indexOf(id) == -1) {
      this.kanbanColConfig.push(id);
    }
  }

  removeColumn(id: number) {
    if (this.kanbanColConfig.indexOf(id) > -1) {
      const i = this.kanbanColConfig.indexOf(id);
      this.kanbanColConfig.splice(i, 1);
    }
  }

  public moveKanbanColLeft(index: number) {
    if (index - 1 >= 0) {
      let aux = this.kanbanColConfig[index];
      this.kanbanColConfig[index] = this.kanbanColConfig[index - 1];
      this.kanbanColConfig[index - 1] = aux;
    }
  }

  public moveKanbanColRight(index: number) {
    if (index < this.kanbanColConfig.length - 1) {
      let aux = this.kanbanColConfig[index];
      this.kanbanColConfig[index] = this.kanbanColConfig[index + 1];
      this.kanbanColConfig[index + 1] = aux;
    }
  }
}
