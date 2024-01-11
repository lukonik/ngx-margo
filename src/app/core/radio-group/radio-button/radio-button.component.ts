import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  computed,
  inject,
} from '@angular/core';
import { RadioGroupState } from '../radio-group.state';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  private radioGroupState = inject(RadioGroupState);

  @Input()
  value: any | undefined;

  isSelected = computed(() => this.radioGroupState.isSelected(this.value));

  @HostListener('click')
  onSelect() {
    this.radioGroupState.setValue(this.value);
  }
}
