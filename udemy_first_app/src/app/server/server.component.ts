import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})


export class ComponentServer{
  serverId :number = 10; 
  serverStatus :string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}