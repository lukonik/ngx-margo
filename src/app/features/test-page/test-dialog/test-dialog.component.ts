import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-dialog',
  standalone: true,
  imports: [],
  templateUrl: './test-dialog.component.html',
  styleUrl: './test-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestDialogComponent {

}
