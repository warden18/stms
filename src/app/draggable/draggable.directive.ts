import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
	private nativeEl: any;

  constructor(el: ElementRef) {
  	this.nativeEl = el.nativeElement;

		this.nativeEl.style.position = 'relative';
		this.nativeEl.setAttribute('draggable', true);
		this.nativeEl.addEventListener('dragstart', this.dragstart, false);
		document.body.addEventListener('dragover',this.dragover, false); 
		document.body.addEventListener('drop', this.drop.bind(this), false); 
  }

  private dragstart(event: any): void {
  	const style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData('text/plain',
    (parseInt(style.getPropertyValue('left'), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue('top'), 10) - event.clientY));
  }

  private dragover(event: any): Boolean {
  	event.preventDefault(); 
  	return false;
  }

  private drop(event: any): Boolean {
  	const offset = event.dataTransfer.getData("text/plain").split(',');
    this.nativeEl.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    this.nativeEl.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
  }

}
