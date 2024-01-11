import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button-loader',
  standalone: true,
  imports: [],
  templateUrl: './button-loader.component.html',
  styleUrl: './button-loader.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonLoaderComponent {

}
