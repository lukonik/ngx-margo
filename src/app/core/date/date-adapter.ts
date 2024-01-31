import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export abstract class DateAdapter {
  abstract monthNames: Signal<string[]>;
  abstract daysOfWeek: Signal<string[]>;
  abstract years: Signal<number[]>;

  abstract currentDate(): Date;

  abstract getMonth(d: Date): number;

  abstract getDays(month: number, year: number): number[];

  abstract getYear(d: Date): number;

  protected _nameStyleFormat = signal<'long' | 'short'>('short');

  public nameStyleFormat = this._nameStyleFormat.asReadonly();

  private setNameStyleFormat(style: 'long' | 'short') {
    this._nameStyleFormat.set(style);
  }
}
