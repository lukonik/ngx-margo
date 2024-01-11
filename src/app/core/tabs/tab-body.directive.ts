import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[appTabBody]',
  standalone: true,
})
export class TabBodyDirective {
  public tempRef = inject(TemplateRef);
}
