import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { LayoutBuilderModule } from './modules/layout-builder/layout-builder.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    LayoutBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
