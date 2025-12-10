import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Ticket } from '../../entities/ticket';
import { User } from '../../entities/user';
import { TicketService } from '../../service/ticket.service';
import { UserService } from '../../service/user.service';
import { NormalizeStringIfExceeded } from '../../utils/filtro.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public user$!: Observable<User>;
  public tickets$!: Observable<Ticket[]>;

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor(
    private ticketService: TicketService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUserById(1);
    this.tickets$ = this.ticketService.getTicketByUserId(1);
  }
}
