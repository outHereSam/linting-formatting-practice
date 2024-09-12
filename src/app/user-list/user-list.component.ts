import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../interfaces/IUser';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      @for (user of users; track $index) {
        <li>{{ user.name }} ({{ user.age }})</li>
      }
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
  standalone: true,
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
