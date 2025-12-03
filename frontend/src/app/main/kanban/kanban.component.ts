import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketStatusEnums } from '../../enums/ticket-status';
import { kanbanConfig } from '../../mock/kanban.mock';
import { Ticket } from '../../entities/ticket';
import { tickets } from '../../mock/tickets-details.mock';
import { RouterModule } from "@angular/router";
import { NormalizeStringIfExceeded } from '../utils/filtro.pipe';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnInit {

  public statusList: TicketStatusEnums[] = [];
  public statusEnums!: TicketStatusEnums[];
  public ticketList: Ticket[] = [];

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor() {
  }

  ngOnInit(): void {
    this.statusEnums = Object.values(TicketStatusEnums);
    this.statusList = kanbanConfig.colConfig;
    this.ticketList = tickets;
  }

  addColumn(status: TicketStatusEnums) {
    if (!this.statusList.find(s => s == status)) {
      this.statusList.push(status);
    }
    console.log('inside add', status);
  }

  removeColumn(status: TicketStatusEnums) {
    this.statusList = this.statusList.filter(s => s !== status);
    console.log('inside remove');
  }

  moveCol(direction: string, status: TicketStatusEnums) {
    if (direction == 'left') {
      let index = this.statusList.findIndex(s => s == status);

      if (index != 0) {
        let prevStatus = this.statusList.at(index - 1);
        this.statusList[index] = prevStatus!;
        this.statusList[index - 1] = status;
      }
    } else {
      let index = this.statusList.findIndex(s => s == status);

      if (index != this.statusList.length-1) {
        let nextStatus = this.statusList.at(index + 1);
        this.statusList[index] = nextStatus!;
        this.statusList[index + 1] = status;
      }
    }
  }
}
