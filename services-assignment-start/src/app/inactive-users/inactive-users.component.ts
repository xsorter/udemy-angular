import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivateService } from '../activate.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  /*@Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();*/
  constructor(private activationService: ActivateService){}

  users: string[] = [];
  onSetToActive(id: number) {
    /*this.userSetToActive.emit(id);*/
    this.activationService.addActive(id);
  }

  ngOnInit(){
    this.users = this.activationService.inactiveUsers;
  }
}
