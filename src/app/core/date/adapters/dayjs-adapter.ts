import { DateAdapter } from '../date-adapter';
import localeData from 'dayjs/plugin/localeData';
import dayjs from 'dayjs';
import { Signal, computed, signal } from '@angular/core';

dayjs.extend(localeData);

export class DayjsAdapter extends DateAdapter {
  private _locale = signal<string>('en');

  monthNames = computed(() =>
    this._nameStyleFormat() === 'short'
      ? dayjs.localeData().monthsShort()
      : dayjs.localeData().months()
  );

  daysOfWeek = computed(() =>
    this._nameStyleFormat() === 'short'
      ? dayjs.localeData().weekdaysShort()
      : dayjs.localeData().weekdays()
  );

  years = signal<number[]>([]);

  override getYear(d: Date): number {
    return dayjs(d).year();
  }

  override getMonth(d: Date): number {
    return dayjs(d).month();
  }

  override getDays(month: number, year: number): number[] {
    return new Array(
      dayjs().set('month', month).set('year', year).daysInMonth()
    )
      .fill(1)
      .map((i, index) => i + index);
  }

  override currentDate(): Date {
    return dayjs().toDate();
  }

  constructor() {
    super();
    this.generateYears();
  }

  private generateYears() {
    const maxYear = dayjs().year();
    const minYear = 1960;

    const years = [];

    for (let i = maxYear; i >= minYear; i--) {
      years.push(i);
    }

    this.years.set(years);
  }

  setLocale(locale: string) {
    this._locale.set(locale);
  }
}
