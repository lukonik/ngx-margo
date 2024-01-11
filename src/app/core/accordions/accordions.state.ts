import { Injectable, signal } from '@angular/core';

@Injectable()
export class AccordionsState {
  startAccordionId = 0;

  private _selectedAccordion = signal<number>(0);

  selectedAccordion = this._selectedAccordion.asReadonly();

  selectAccordion(accordionIndex: number) {
    this._selectedAccordion.set(accordionIndex);
  }

  isSelected(accordionIndex: number) {
    return this._selectedAccordion() === accordionIndex;
  }

  addTab() {
    return this.startAccordionId++;
  }
}
