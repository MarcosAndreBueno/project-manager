import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ticket } from '../../../entities/ticket';
import { TicketStatus } from '../../../entities/ticket-status';
import { StatusService } from '../../../service/status.service';
import { TicketService } from '../../../service/ticket.service';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent implements OnInit {
  public ticket!: Ticket;
  public childTickets$!: Observable<Ticket[]>;
  public statusEnums: TicketStatus[] = [];

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private statusService: StatusService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getTicketDetailsData(id);
    });
  }

  private getTicketDetailsData(id: number): void {
    this.ticketService.getTicketById(id).subscribe(
      t => {
        this.childTickets$ = this.ticketService.getChildTickets(t.childTickets),
        this.ticket = t;
      }
    )
    
    this.statusService.getStatusEnums().subscribe(
      st => this.statusEnums = st
    );
  }

  public changeStatus(status: TicketStatus): void {
    if (this.ticket) {
      this.ticket.status.id = status.id;
    }
  }
}