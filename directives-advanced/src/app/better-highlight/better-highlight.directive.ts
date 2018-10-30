import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#d2d2d2')
  }

  @HostListener('mouseover') mouseover() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
