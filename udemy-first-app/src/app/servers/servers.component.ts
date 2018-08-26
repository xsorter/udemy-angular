import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Server is not created";
  serverName = 'Test';
  

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
    
  }

  ngOnInit() {

  }

  onServerCreated(){
    this.serverCreationStatus = "Server Created: "+this.serverName;
  }

  onUpdateServerName(ev: Event){
    this.serverName = (<HTMLInputElement>ev.target).value;
  }

}
  