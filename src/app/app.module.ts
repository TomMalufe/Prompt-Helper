import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { StoreModule } from '@ngrx/store';
import { storageMetareducer } from './store/storage.metareducer';

@NgModule({
  declarations: [AppComponent, CategoryTabComponent, SaveDialogComponent, ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    ClipboardModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [storageMetareducer]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
