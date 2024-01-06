import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PromptTag } from '../shared/prompt';
import { PromptValuesEnum } from '../shared/prompt-values-enum';
import { Store, select } from '@ngrx/store';
import { selectPrompt } from '../store/selectors';
import { Actions } from '../store/actions';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Categories, DEFAULT_TAGS } from '../shared/defaultsIndex';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnDestroy {
  private onDestroy$ = new Subject<void>();

  prompt$ = this.store.pipe<PromptTag[]>(select(selectPrompt));

  selectedCategory: Categories = 'composition';
  subCategories: string[] = [];

  get tags(): {[group: string]: string[]} {
    return DEFAULT_TAGS[this.selectedCategory];
  }

  searchValue = '';

  constructor(private store: Store, private route: ActivatedRoute) {
    route.paramMap.pipe(takeUntil(this.onDestroy$)).subscribe(paramMap => {
      this.selectedCategory = paramMap.get('category') as Categories || 'composition';
      this.subCategories = Object.keys(this.tags);
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  addRemoveDefaultPrompt(tag: string, value: PromptValuesEnum): void {
    switch (value) {
      case PromptValuesEnum.POSITIVE:
        this.store.dispatch(Actions.addToPrompt({ value: tag, isNegative: false }));
        break;
      case PromptValuesEnum.NEGATIVE:
        this.store.dispatch(Actions.addToPrompt({ value: tag, isNegative: true }));
        break;
      case PromptValuesEnum.NONE:
        this.store.dispatch(Actions.removeFromPrompt({ value: tag }));
        break;
    }
  }
  getItemList(item: string, prompt: PromptTag[]): string {
    const found = prompt.find((it) => it.value === item);
    if (found) {
      if (found.isNegative) {
        return PromptValuesEnum.NEGATIVE;
      }
      return PromptValuesEnum.POSITIVE;
    }
    return PromptValuesEnum.NONE;
  }
  search(prompts: string[]): string[] {
    const find = new RegExp(this.searchValue, 'i');
    return prompts.filter((it) => find.test(it));
  }
}
