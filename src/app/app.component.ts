import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { filter, first } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import {
  DEFAULT_ATTIRE_PROMPTS,
  DEFAULT_BODY_PROMPTS,
  DEFAULT_COMPOSITION_PROMPTS,
  DEFAULT_EXPRESSION_PROMPTS,
  DEFAULT_FACE_PROMPTS,
  DEFAULT_HAIR_PROMPTS,
  DEFAULT_POSE_PROMPTS
} from './shared/defaultsIndex';
import { PromptTag } from './shared/prompt';
import { clamp, promptTagToString } from './shared/utils';
import { Store, select } from '@ngrx/store';
import { selectNegativePrompts, selectPositivePrompts, selectSavedPrompts } from './store/selectors';
import { Actions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positivePrompts$ = this.store.pipe<PromptTag[]>(select(selectPositivePrompts));
  negativePrompts$ = this.store.pipe<PromptTag[]>(select(selectNegativePrompts));
  savedPrompts$ = this.store.pipe<string[]>(select(selectSavedPrompts));

  promptTagToString = promptTagToString;

  protected readonly DEFAULT_ATTIRE_PROMPTS = DEFAULT_ATTIRE_PROMPTS;
  protected readonly DEFAULT_BODY_PROMPTS = DEFAULT_BODY_PROMPTS;
  protected readonly DEFAULT_COMPOSITION_PROMPTS = DEFAULT_COMPOSITION_PROMPTS;
  protected readonly DEFAULT_EXPRESSION_PROMPTS = DEFAULT_EXPRESSION_PROMPTS;
  protected readonly DEFAULT_FACE_PROMPTS = DEFAULT_FACE_PROMPTS;
  protected readonly DEFAULT_HAIR_PROMPTS = DEFAULT_HAIR_PROMPTS;
  protected readonly DEFAULT_POSE_PROMPTS = DEFAULT_POSE_PROMPTS;

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
  removePrompt(tag: PromptTag): void {
    this.store.dispatch(Actions.removeFromPrompt(tag));
  }
  emphasise(tag: PromptTag, inc: number): void {
    this.store.dispatch(Actions.updateTagEmphasis({...tag, emphasis: clamp(tag.emphasis + inc, -3, 3)}));
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
