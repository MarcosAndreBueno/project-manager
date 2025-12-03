import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { userList } from '../../mock/user.mock';
import { Ticket } from '../../entities/ticket';
import { tickets } from '../../mock/tickets-details.mock';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NormalizeStringIfExceeded } from '../utils/filtro.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, NormalizeStringIfExceeded],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public user!: User;
  public ticketList!: Ticket[];

  public descriptionLimit: number = 70;
  public titleLimit: number = 50;

  constructor() {}

  ngOnInit(): void {
    this.user = userList[0];
    this.ticketList = tickets.filter(t => t.createdBy.id == this.user.id );
  }
}
