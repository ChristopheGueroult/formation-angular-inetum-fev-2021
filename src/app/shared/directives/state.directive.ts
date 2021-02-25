import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}

  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}

// this.appState vaut CANCELED => state-canceled
// this.appState vaut OPTION => state-option
// this.appState vaut CONFIRMED => state-confirmed
// Binder la propriété class de mon td dans le component parent avec ce string
