import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string}
  @ViewChild('heading') header: ElementRef
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(){

  }

  ngOnInit(){
    console.log('ngInit called');
    console.log(this.header.nativeElement.innerHTML)
  }

  ngDoCheck(){
    console.log('doCheck called');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called '+this.paragraph.nativeElement.innerText)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }

}
