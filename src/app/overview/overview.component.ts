import { Component } from '@angular/core';
import { PromptTag } from '../shared/prompt';
import { Store, select } from '@ngrx/store';
import { selectNegativePrompts, selectPositivePrompts, selectSavedPrompts } from '../store/selectors';
import { Actions } from '../store/actions';
import { MatDialog } from '@angular/material/dialog';
import { promptTagToString } from '../shared/utils';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';
import { first, filter } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  positivePrompts$ = this.store.pipe<PromptTag[]>(select(selectPositivePrompts));
  negativePrompts$ = this.store.pipe<PromptTag[]>(select(selectNegativePrompts));
  savedPrompts$ = this.store.pipe<string[]>(select(selectSavedPrompts));

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {}

  promptToString(prompt: PromptTag[]): string {
    return prompt.map(promptTagToString).join(', ');
  }

  clear(): void {
    this.store.dispatch(Actions.clearPrompt());
  }
  save(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {
      width: '400px'
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe((name: string) => {
        this.store.dispatch(Actions.savePrompt({ name }));
      });
  }
  load(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { message: 'Are you sure? This will replace your current prompt.' }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        this.store.dispatch(Actions.loadPrompt({ name }));
      });
  }
  deleteSavedPrompt(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { message: "Are you sure? Once it's gone, it's gone." }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        this.store.dispatch(Actions.deleteSavedPrompt({ name }));
      });
  }
}
