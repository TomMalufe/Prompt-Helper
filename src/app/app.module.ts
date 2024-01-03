import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryTabComponent } from './category-tab/category-tab.component';

@NgModule({
  declarations: [AppComponent, CategoryTabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
