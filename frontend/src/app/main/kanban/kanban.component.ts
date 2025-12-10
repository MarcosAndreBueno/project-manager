import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { combineLatest, Observable, of } from 'rxjs';
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

  public statusEnums$: Observable<TicketStatus[]> = of([]);
  public userConfiguration$: Observable<UserConfig> = of();
  public kanbanColConfig?: TicketStatus[];
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
    this.statusEnums$ = this.statusService.getStatusEnums();
    this.userConfiguration$ = this.configService.getUserConfigurations(1);

    combineLatest([this.statusEnums$, this.userConfiguration$]).subscribe(
      ([allStatus, userConfig]) => {

        // s = s.id (backend só está enviando id)
        const selectedIds = userConfig.kanbanColConfig.map(s => Number(s));

        // filtrar os status completos baseado nos ids
        this.kanbanColConfig = allStatus.filter(
          status => selectedIds.includes(status.id)
        );
      }
    );
  }

  addColumn(status: TicketStatus) {
    if (this.kanbanColConfig) {
      if (!this.kanbanColConfig.find(s => s == status)) {
        this.kanbanColConfig.push(status);
      }
    }
  }

  removeColumn(status: TicketStatus) {
    if (this.kanbanColConfig) {
      this.kanbanColConfig = this.kanbanColConfig.filter(s => s !== status);
    }
  }

  moveCol(direction: string, status: TicketStatus) {
    if (this.kanbanColConfig) {
      if (direction == 'left') {
        let index = this.kanbanColConfig.findIndex(s => s == status);

        if (index != 0) {
          let prevStatus = this.kanbanColConfig.at(index - 1);
          this.kanbanColConfig[index] = prevStatus!;
          this.kanbanColConfig[index - 1] = status;
        }
      } else {
        let index = this.kanbanColConfig.findIndex(s => s == status);

        if (index != this.kanbanColConfig.length - 1) {
          let nextStatus = this.kanbanColConfig.at(index + 1);
          this.kanbanColConfig[index] = nextStatus!;
          this.kanbanColConfig[index + 1] = status;
        }
      }
    }
  }
}
