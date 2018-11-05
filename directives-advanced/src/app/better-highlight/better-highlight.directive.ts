import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#d2d2d2')
  }

  @HostListener('mouseover') mouseover() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
