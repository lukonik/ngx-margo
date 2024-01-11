import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonLoaderComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  type: string | undefined;

  @Input()
  loading:boolean | undefined;
}
