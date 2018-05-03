import { Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnDestroy {
  private nativeEl: any;

  constructor(el: ElementRef) {
    this.nativeEl = el.nativeElement;

		this.nativeEl.style.position = 'absolute';
		this.nativeEl.setAttribute('draggable', true);
		this.nativeEl.addEventListener('dragstart', this.dragstart, false);
  }

  private dragstart(event: any): void {
  	const style = window.getComputedStyle(event.target, null);
    const xOffset = parseInt(style.getPropertyValue('left'), 10) - event.clientX;
    const yOffset = parseInt(style.getPropertyValue('top'), 10) - event.clientY;
    const elementId = event.target.id;

    event.dataTransfer.setData('text/plain', JSON.stringify({ xOffset, yOffset, elementId }));
  }

  public ngOnDestroy(): void {
    this.nativeEl.removeEventListener('dragstart', this.dragstart, false);
  }
}
