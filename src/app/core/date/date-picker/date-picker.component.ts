import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DateAdapter } from '../date-adapter';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  dateAdapter = inject(DateAdapter);

  activeMonth = signal<number>(0);
  activeYear = signal<number>(0);

  months = this.dateAdapter.monthNames;
  years = this.dateAdapter.years;

  activeDays = computed(() =>
    this.dateAdapter.getDays(this.activeMonth(), this.activeYear())
  );

  constructor() {
    const currentDate = this.dateAdapter.currentDate();

    this.activeMonth.set(this.dateAdapter.getMonth(currentDate));

    this.activeYear.set(this.dateAdapter.getYear(currentDate));

    console.log(this.dateAdapter.monthNames());
    console.log(this.dateAdapter.daysOfWeek());
  }

  setMonth(month: number) {
    this.activeMonth.set(month);
  }

  setYear(year: number) {
    this.activeYear.set(year);
  }
}
