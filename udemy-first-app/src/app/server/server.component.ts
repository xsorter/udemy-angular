import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: green; 
    }
    .offline{
      color: red;
    }
  `]
})


export class ComponentServer{
  serverId :number = 10; 
  serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

  getServerStatus(){
    return this.serverStatus;
  }
}