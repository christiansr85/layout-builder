import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutBuilderComponent } from './layout-builder.component';


@NgModule({
  declarations: [
      LayoutBuilderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutBuilderComponent
  ],
  entryComponents: [
    LayoutBuilderComponent
  ]
})
export class LayoutBuilderModule { }
