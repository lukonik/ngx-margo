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

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TabsState],
})
export class TabsComponent {
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  tabsState = inject(TabsState);
}
