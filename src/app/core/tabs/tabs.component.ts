import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  inject,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { NgTemplateOutlet } from '@angular/common';
import { TabsState } from './tabs.state';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TabsState],
  animations: [
    trigger('tabAnimation', [
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class TabsComponent {
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  tabsState = inject(TabsState);
}
