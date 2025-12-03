import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { userList } from '../../mock/user.mock';
import { Ticket } from '../../entities/ticket';
import { tickets } from '../../mock/tickets-details.mock';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user!: User;
  ticketList!: Ticket[];

  constructor() {}

  ngOnInit(): void {
    this.user = userList[0];
    this.ticketList = tickets.filter(t => t.createdBy.id == this.user.id );
  }
}
