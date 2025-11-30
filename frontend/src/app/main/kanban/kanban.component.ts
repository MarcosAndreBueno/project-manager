import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketStatusEnums } from '../../enums/ticket-status';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnInit {

  public statusList: TicketStatusEnums[] = [];
  public statusEnums!: TicketStatusEnums[];

  constructor() {
  }

  ngOnInit(): void {
    this.statusEnums = Object.values(TicketStatusEnums);
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
}
