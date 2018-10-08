import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  //newServerName = '';
  newServerContent = '';

  constructor() {}
  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement){
      this.serverCreated.emit({
        serverName: serverNameInput.value, 
        serverContent: this.serverContentInput.nativeElement.value
      })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
     this.blueprintCreated.emit({
       blueprintName: serverNameInput.value, 
       blueprintContent: this.serverContentInput.nativeElement.value
      })
  }

}
