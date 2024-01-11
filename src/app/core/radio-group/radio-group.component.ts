import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RadioGroupState } from './radio-group.state';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RadioGroupState],
})
export class RadioGroupComponent {
  radioGroupState = inject(RadioGroupState);

  @Input()
  set compareWith(compareWith: any) {
    this.radioGroupState.compareWith = compareWith;
  }
}
