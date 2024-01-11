import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { SelectComponent } from '../../core/select/select.component';
import { SelectItemComponent } from '../../core/select/select-item/select-item.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [ButtonComponent, SelectComponent, SelectItemComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {
  booleanValue = signal(true);

  constructor() {
    setTimeout(() => {
      // this.booleanValue.set(false)
    }, 5000);
  }
}
