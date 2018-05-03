import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {

  constructor(el: ElementRef) {
		el.nativeElement.addEventListener('dragover',this.dragover, false); 
    el.nativeElement.addEventListener('drop', this.drop, false); 
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
}
