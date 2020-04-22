import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTrackScroll]'
})
export class TrackScrollDirective {
  @Output() public scrollY = new EventEmitter<string>();
  @HostListener('window:scroll', ['$event'])
  track(event) {
    this.scrollY.emit(event.path[1].scrollY);
  }
}
