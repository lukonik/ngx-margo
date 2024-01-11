import { Injectable, signal } from '@angular/core';

@Injectable()
export class TabsState {
  startTabId = 0;

  private _selectedTab = signal<number>(0);

  selectedTab = this._selectedTab.asReadonly();

  selectTab(tabIndex: number) {
    this._selectedTab.set(tabIndex);
  }

  isSelected(tabIndex: number) {
    return this._selectedTab() === tabIndex;
  }

  addTab() {
    return this.startTabId++;
  }
}
