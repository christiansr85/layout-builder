import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.scss']
})
export class LayoutBuilderComponent {

  @Input() layout: any;

  @ContentChild(TemplateRef) template;

  constructor() {
  }
}
