import { Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnDestroy {
  private nativeEl: any;

  constructor(el: ElementRef) {
    this.nativeEl = el.nativeElement;

    this.nativeEl.setAttribute('id', Math.random());
		this.nativeEl.style.position = 'absolute';
		this.nativeEl.setAttribute('draggable', true);
		this.nativeEl.addEventListener('dragstart', this.dragstart, false);
  }

  private dragstart(event: any): void {
  	const style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData('text/plain',
    (parseInt(style.getPropertyValue('left'), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue('top'), 10) - event.clientY));
    event.dataTransfer.setData('text/html', event.target.id);
  }

  public ngOnDestroy(): void {
    this.nativeEl.removeEventListener('dragstart', this.dragstart, false);
  }
}
