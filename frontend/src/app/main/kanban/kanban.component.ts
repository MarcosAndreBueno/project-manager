import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketStatusEnums } from '../../enums/ticket-status';
import { Ticket } from '../../entities/ticket';
import { RouterModule } from "@angular/router";
import { NormalizeStringIfExceeded } from '../../utils/filtro.pipe';
import { TicketService } from '../../service/ticket.service';
import { ConfigurationService } from '../../service/configuration.service';
import { StatusService } from '../../service/status.service';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnInit {

  public statusEnums!: TicketStatusEnums[];
  public kanbanColConfig: TicketStatusEnums[] = [];
  public tickets: Ticket[] = [];

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor(
    private ticketService: TicketService,
    private configService: ConfigurationService,
    private statusService: StatusService
  ) {
  }

  ngOnInit(): void {
    this.statusEnums = this.statusService.getStatusEnums();
    this.kanbanColConfig = this.configService.getKanbanConfigurations().colConfig;
    this.tickets = this.ticketService.getTickets();
  }

  addColumn(status: TicketStatusEnums) {
    if (!this.kanbanColConfig.find(s => s == status)) {
      this.kanbanColConfig.push(status);
    }
    console.log('inside add', status);
  }

  removeColumn(status: TicketStatusEnums) {
    this.kanbanColConfig = this.kanbanColConfig.filter(s => s !== status);
    console.log('inside remove');
  }

  moveCol(direction: string, status: TicketStatusEnums) {
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
