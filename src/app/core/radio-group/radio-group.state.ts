import { Injectable, signal } from '@angular/core';

@Injectable()
export class RadioGroupState {
  private _value = signal<any | undefined>(undefined);

  public compareWith: (v1: any, v2: any) => boolean = (v1, v2) => v1 === v2;

  public value = this._value.asReadonly();

  public isSelected(value: any) {
    return this.compareWith(this.value(), value);
  }

  public setValue(value: any) {
    this._value.set(value);
  }
}
