import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagsComponent } from './tags/tags.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { metaReducers } from './store/storage.metareducer';
import { StoreState, appReducer } from './store/reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

export interface AppState {
  app: StoreState;
}

@NgModule({
  declarations: [AppComponent, TagsComponent, SaveDialogComponent, ConfirmationDialogComponent, DetailsComponent, OverviewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    ClipboardModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    StoreModule.forRoot({ app: appReducer }, { metaReducers: metaReducers })
  ],
  providers: [
    provideStore({ app: appReducer }, { metaReducers: metaReducers }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
    provideRouter(
      [
        { path: 'overview', component: OverviewComponent },
        { path: 'details', component: DetailsComponent },
        { path: 'tags/:category', component: TagsComponent },
        { path: '', redirectTo: '/overview', pathMatch: 'full' }
      ],
      withComponentInputBinding()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
