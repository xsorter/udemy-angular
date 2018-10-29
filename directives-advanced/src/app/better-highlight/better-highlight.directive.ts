import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff')
  }
}
