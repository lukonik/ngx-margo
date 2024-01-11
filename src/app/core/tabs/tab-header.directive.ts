import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[appTabHeader]',
  standalone: true,
})
export class TabHeaderDirective {
  public tempRef = inject(TemplateRef);
}
