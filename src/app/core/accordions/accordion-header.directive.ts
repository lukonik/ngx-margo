import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[appAccordionHeader]',
  standalone: true,
})
export class AccordionHeaderDirective {
  public tempRef = inject(TemplateRef);
}
