import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  booleanValue=signal(true);

  constructor(){
    setTimeout(()=>{
      // this.booleanValue.set(false)
    },5000)
  }
}
