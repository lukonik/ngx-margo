import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';
import { SelectComponent } from '../../core/select/select.component';
import { SelectItemComponent } from '../../core/select/select-item/select-item.component';
import { MultiSelectComponent } from '../../core/multi-select/multi-select.component';
import { MultiSelectItemComponent } from '../../core/multi-select/multi-select-item/multi-select-item.component';
import { Dialog } from '../../core/dialog/dialog';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { RadioGroupComponent } from '../../core/radio-group/radio-group.component';
import { RadioButtonComponent } from '../../core/radio-group/radio-button/radio-button.component';
import { TabsComponent } from '../../core/tabs/tabs.component';
import { TabComponent } from '../../core/tabs/tab/tab.component';
import { TabHeaderDirective } from '../../core/tabs/tab-header.directive';
import { TabBodyDirective } from '../../core/tabs/tab-body.directive';
import { AccordionBodyDirective } from '../../core/accordions/accordion-body.directive';
import { AccordionComponent } from '../../core/accordions/accordion/accordion.component';
import { AccordionHeaderDirective } from '../../core/accordions/accordion-header.directive';
import { AccordionsComponent } from '../../core/accordions/accordions.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    SelectItemComponent,
    MultiSelectComponent,
    MultiSelectItemComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    TabsComponent,
    TabComponent,
    TabHeaderDirective,
    TabBodyDirective,
    AccordionBodyDirective,
    AccordionComponent,
    AccordionHeaderDirective,
    AccordionsComponent,
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
