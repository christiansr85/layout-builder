import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { LayoutBuilderModule } from './modules/layout-builder/layout-builder.module';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { BigComponent } from './components/big/big.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    IndicatorComponent,
    BigComponent
  ],
  imports: [
    BrowserModule,
    LayoutBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
