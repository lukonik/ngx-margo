import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { SelectComponent } from '../../core/select/select.component';
import { SelectItemComponent } from '../../core/select/select-item/select-item.component';
import { MultiSelectComponent } from '../../core/multi-select/multi-select.component';
import { MultiSelectItemComponent } from '../../core/multi-select/multi-select-item/multi-select-item.component';
import { Dialog } from '../../core/dialog/dialog';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    SelectItemComponent,
    MultiSelectComponent,
    MultiSelectItemComponent,
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {
  booleanValue = signal(true);

  dialog = inject(Dialog);

  constructor() {
    // setTimeout(() => {
    //   this.dialog.open(TestDialogComponent, {
    //     position: (pos) => pos.bottom('0px').centerHorizontally(),
    //   });
    // }, 2000);
  }
}
