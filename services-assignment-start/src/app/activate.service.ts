import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class ActivateService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CounterService){}

  addActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.doCount();
  }

  addInactive(id: number){
    this.inactiveUsers.push(this.inactiveUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.doCount();
  }
}