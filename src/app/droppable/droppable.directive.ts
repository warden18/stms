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
    const data = event.dataTransfer.getData('text/plain').split(',');
    const offsetX = data[0];
    const offsetY = data[1];
    const elementId = data[2];
    const element = document.getElementById(elementId);
    element.style.left = (event.clientX + parseInt(offsetX, 10)) + 'px';
    element.style.top = (event.clientY + parseInt(offsetY, 10)) + 'px';
    return false;
  }

  public ngOnDestroy(): void {
    this.nativeEl.removeEventListener('dragover', this.dragover, false);
    this.nativeEl.removeEventListener('drop', this.drop, false);
  }
}
