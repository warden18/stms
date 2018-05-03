import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  constructor(el: ElementRef) {
		el.nativeElement.style.position = 'absolute';
		el.nativeElement.setAttribute('draggable', true);
		el.nativeElement.addEventListener('dragstart', this.dragstart, false);
  }

  private dragstart(event: any): void {
  	const style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData('text/plain',
    (parseInt(style.getPropertyValue('left'), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue('top'), 10) - event.clientY));
    event.dataTransfer.setData('text/html', event.target.id);
  }
}
