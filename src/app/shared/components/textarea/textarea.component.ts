import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

import * as autosize from 'autosize';

@Directive({
  selector: '[autosize]'
})
export class TextareaComponent implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit() {
    autosize(this.el.nativeElement);
  }

  ngOnDestroy() {
    autosize.destroy(this.el.nativeElement);
  }
}
