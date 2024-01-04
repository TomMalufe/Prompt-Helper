import { AfterContentChecked, AfterContentInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { filter, first } from 'rxjs';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import {
  DEFAULT_ATTIRE_PROMPTS,
  DEFAULT_BODY_PROMPTS,
  DEFAULT_COMPOSITION_PROMPTS,
  DEFAULT_EXPRESSION_PROMPTS,
  DEFAULT_FACE_PROMPTS,
  DEFAULT_HAIR_PROMPTS
} from './shared/defaultsIndex';
import { Prompt } from './shared/prompt';
import { SavedPrompts } from './shared/saved-prompts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked, AfterContentInit {
  @ViewChild('attire', { static: true }) attire!: CategoryTabComponent;
  @ViewChild('body', { static: true }) body!: CategoryTabComponent;
  @ViewChild('composition', { static: true }) composition!: CategoryTabComponent;
  @ViewChild('expression', { static: true }) expression!: CategoryTabComponent;
  @ViewChild('face', { static: true }) face!: CategoryTabComponent;
  @ViewChild('hair', { static: true }) hair!: CategoryTabComponent;

  positivePrompts: Prompt[] = [];
  negativePrompts: Prompt[] = [];
  savedPrompts: SavedPrompts[] = [];
  readonly LOCAL_STORAGE_NAME = 'saved_prompts';

  allPositivePrompts = () => this.positivePrompts.map((it) => it.toString()).join(', ');
  allNegativePrompts = () => this.negativePrompts.map((it) => it.toString()).join(', ');
  protected readonly DEFAULT_ATTIRE_PROMPTS = DEFAULT_ATTIRE_PROMPTS;
  protected readonly DEFAULT_BODY_PROMPTS = DEFAULT_BODY_PROMPTS;
  protected readonly DEFAULT_COMPOSITION_PROMPTS = DEFAULT_COMPOSITION_PROMPTS;
  protected readonly DEFAULT_EXPRESSION_PROMPTS = DEFAULT_EXPRESSION_PROMPTS;
  protected readonly DEFAULT_FACE_PROMPTS = DEFAULT_FACE_PROMPTS;
  protected readonly DEFAULT_HAIR_PROMPTS = DEFAULT_HAIR_PROMPTS;

  constructor(public dialog: MatDialog) {
    this.getSavedPrompts();
  }

  clear(): void {
    this.attire.clear();
    this.body.clear();
    this.composition.clear();
    this.expression.clear();
    this.face.clear();
    this.hair.clear();
  }
  save(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {
      width: '250px'
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe((result: string) => {
        window.localStorage.setItem(
          this.LOCAL_STORAGE_NAME,
          JSON.stringify([
            ...this.savedPrompts,
            {
              name: result,
              positive: {
                attire: this.attire.positivePrompts,
                body: this.body.positivePrompts,
                composition: this.composition.positivePrompts,
                expression: this.expression.positivePrompts,
                face: this.face.positivePrompts,
                hair: this.hair.positivePrompts
              },
              negative: {
                attire: this.attire.negativePrompts,
                body: this.body.negativePrompts,
                composition: this.composition.negativePrompts,
                expression: this.expression.negativePrompts,
                face: this.face.negativePrompts,
                hair: this.hair.negativePrompts
              }
            }
          ])
        );
        this.getSavedPrompts();
      });
  }
  load(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure? This will replace your current prompt.' }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        const stored = this.savedPrompts.find((it) => it.name === name);
        if (!stored) {
          return;
        }
        this.clear();
        // update positive prompts
        this.attire.positivePrompts = stored.positive.attire.map((it) => Prompt.create(it.value, it.emphasis));
        this.body.positivePrompts = stored.positive.body.map((it) => Prompt.create(it.value, it.emphasis));
        this.composition.positivePrompts = stored.positive.composition.map((it) =>
          Prompt.create(it.value, it.emphasis)
        );
        this.expression.positivePrompts = stored.positive.expression.map((it) => Prompt.create(it.value, it.emphasis));
        this.face.positivePrompts = stored.positive.face.map((it) => Prompt.create(it.value, it.emphasis));
        this.hair.positivePrompts = stored.positive.hair.map((it) => Prompt.create(it.value, it.emphasis));

        // update negative prompts
        this.attire.negativePrompts = stored.negative.attire.map((it) => Prompt.create(it.value, it.emphasis));
        this.body.negativePrompts = stored.negative.body.map((it) => Prompt.create(it.value, it.emphasis));
        this.composition.negativePrompts = stored.negative.composition.map((it) =>
          Prompt.create(it.value, it.emphasis)
        );
        this.expression.negativePrompts = stored.negative.expression.map((it) => Prompt.create(it.value, it.emphasis));
        this.face.negativePrompts = stored.negative.face.map((it) => Prompt.create(it.value, it.emphasis));
        this.hair.negativePrompts = stored.negative.hair.map((it) => Prompt.create(it.value, it.emphasis));
      });
  }
  deleteSavedPrompt(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: "Are you sure? Once it's gone, it's gone." }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        const index = this.savedPrompts.findIndex((it) => it.name === name);
        if (index < 0) {
          return;
        }
        this.savedPrompts.splice(index, 1);
        window.localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(this.savedPrompts));
      });
  }

  ngAfterContentInit() {
    this.updatePrompts();
  }
  ngAfterContentChecked() {
    this.updatePrompts();
  }

  private updatePrompts(): void {
    this.positivePrompts = [
      this.attire.positivePrompts,
      this.body.positivePrompts,
      this.composition.positivePrompts,
      this.expression.positivePrompts,
      this.face.positivePrompts,
      this.hair.positivePrompts
    ].flat();
    this.negativePrompts = [
      this.attire.negativePrompts,
      this.body.negativePrompts,
      this.composition.negativePrompts,
      this.expression.negativePrompts,
      this.face.negativePrompts,
      this.hair.negativePrompts
    ].flat();
  }
  private getSavedPrompts(): void {
    const stored = window.localStorage.getItem(this.LOCAL_STORAGE_NAME);
    if (stored && stored.length > 0 && /composition/.test(stored)) {
      this.savedPrompts = JSON.parse(stored) as SavedPrompts[];
    } else {
      this.savedPrompts = [];
    }
  }
}
