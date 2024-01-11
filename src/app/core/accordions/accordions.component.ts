import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  inject,
} from '@angular/core';
import { AccordionsState } from './accordions.state';
import { AccordionComponent } from './accordion/accordion.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [AccordionComponent, NgTemplateOutlet],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccordionsState],
})
export class AccordionsComponent {
  @ContentChildren(AccordionComponent)
  accordions!: QueryList<AccordionComponent>;

  accordionsState = inject(AccordionsState);
}
