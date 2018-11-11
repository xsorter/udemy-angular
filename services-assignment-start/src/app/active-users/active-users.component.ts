import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivateService } from '../activate.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  //@Input() users: string[];
  users = [];
  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor(private activationService: ActivateService){}

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.activationService.addInactive(id);
  }

  ngOnInit(){
    this.users = this.activationService.activeUsers;
  }
}
