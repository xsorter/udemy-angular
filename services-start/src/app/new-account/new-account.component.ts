import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus)
  }
}
