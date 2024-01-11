import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[appAccordionBody]',
  standalone: true,
})
export class AccordionBodyDirective {
  public tempRef = inject(TemplateRef);
}
