import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
	private nativeEl: any;

  constructor(el: ElementRef) {	
  	this.nativeEl = el.nativeElement;

		this.nativeEl.addEventListener('dragover',this.dragover, false); 
    this.nativeEl.addEventListener('drop', this.drop, false); 
  }

  private dragover(event: any): Boolean {
    event.preventDefault(); 
    return false;
  }

  private drop(event: any): Boolean {
    const offset = event.dataTransfer.getData('text/plain').split(',');
    const element = document.getElementById(event.dataTransfer.getData('text/html'));
    element.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    element.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
  }

  public ngOnDestroy(): void {
    this.nativeEl.removeEventListener('dragover', this.dragover, false);
    this.nativeEl.removeEventListener('drop', this.drop, false);
  }
}
