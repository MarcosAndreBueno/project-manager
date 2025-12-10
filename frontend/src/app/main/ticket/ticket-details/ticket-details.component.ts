import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Ticket } from '../../../entities/ticket';
import { StatusService } from '../../../service/status.service';
import { TicketService } from '../../../service/ticket.service';
import { TicketStatus } from '../../../entities/ticket-status';

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
  public statusEnums$: Observable<TicketStatus[]> = of([]);

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
        this.childTickets$ = this.ticketService.getChildTickets(t.childTicketsId),
        this.ticket = t;
      }
    )
    
    this.statusEnums$ = this.statusService.getStatusEnums();
  }

  public changeStatus(status: TicketStatus): void {
    if (this.ticket) {
      this.ticket.status.id = status.id;
    }
  }
}