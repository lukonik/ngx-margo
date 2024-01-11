import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  computed,
  inject,
} from '@angular/core';
import { AccordionHeaderDirective } from '../accordion-header.directive';
import { AccordionBodyDirective } from '../accordion-body.directive';
import { AccordionsState } from '../accordions.state';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @ContentChild(AccordionHeaderDirective)
  accordionHeader: AccordionHeaderDirective | undefined;

  @ContentChild(AccordionBodyDirective)
  accordionBody: AccordionBodyDirective | undefined;

  @Input()
  label: string | undefined;

  accordionState = inject(AccordionsState);

  accordionId = this.accordionState.addTab();

  isSelected = computed(() => this.accordionState.isSelected(this.accordionId));
}
