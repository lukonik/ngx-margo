import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
  computed,
  inject,
} from '@angular/core';
import { TabHeaderDirective } from '../tab-header.directive';
import { TabBodyDirective } from '../tab-body.directive';
import { NgTemplateOutlet } from '@angular/common';
import { TabsState } from '../tabs.state';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @ContentChild(TabHeaderDirective)
  tabHeader: TabHeaderDirective | undefined;

  @ContentChild(TabBodyDirective)
  tabBody: TabBodyDirective | undefined;

  @Input()
  label: string | undefined;

  tabsState = inject(TabsState);

  tabId = this.tabsState.addTab();

  isSelected = computed(() => this.tabsState.isSelected(this.tabId));
}
