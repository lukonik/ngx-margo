import { Injectable, signal } from '@angular/core';

@Injectable()
export class TabsState {
  startTabId = 0;

  private _selectedTab = signal<number>(0);

  private _tabTracker = new Set<number>();

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

  removeTab(tracker: number) {
    this._tabTracker.delete(tracker);
  }
}
