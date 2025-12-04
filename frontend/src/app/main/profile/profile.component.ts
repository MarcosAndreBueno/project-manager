import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { Ticket } from '../../entities/ticket';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NormalizeStringIfExceeded } from '../../utils/filtro.pipe';
import { TicketService } from '../../service/ticket.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public user?: User;
  public tickets?: Ticket[];

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor(
    private ticketService: TicketService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUserById(1);

    if (this.user) {
      this.tickets = this.ticketService.getTicketByUserId(this.user.id);
    }
  }
}
