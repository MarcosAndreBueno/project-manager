import { Component } from '@angular/core';
import { Ticket } from '../../../entities/ticket';
import { tickets } from '../../../mock/tickets-details.mock';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticker-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticker-details.component.html',
  styleUrl: './ticker-details.component.scss'
})
export class TickerDetailsComponent {
  ticket?: Ticket;

  constructor(private route: ActivatedRoute) {
    const currentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    
    this.ticket = tickets.find(t => t.id == currentId);
  }
}
