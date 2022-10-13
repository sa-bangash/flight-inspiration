import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit, OnDestroy {
  darkCtrl = new FormControl(false);
  sub = new Subscription();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.darkCtrl.valueChanges.subscribe((value) => {
        this.onToggle(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private onToggle(isDark: boolean) {
    if (isDark) {
      this.render.addClass(this.document.body, 'dark-mode');
    } else {
      this.render.removeClass(this.document.body, 'dark-mode');
    }
  }
}
