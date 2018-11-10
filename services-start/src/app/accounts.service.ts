import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";


@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingServive: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingServive.logStatusChange(status);
  }

  updateAccount(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingServive.logStatusChange(status);
  }
}