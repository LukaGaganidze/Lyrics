import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearrchInputComponnentComponent } from '../searrch-input-componnent/searrch-input-componnent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstLetterPipe } from '../searrch-input-componnent/first-capital-letter.pipe';
import { NoResultsPageComponent } from '../no-results-page/no-results-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearrchInputComponnentComponent,
    CapitalizeFirstLetterPipe,
    NoResultsPageComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SearrchInputComponnentComponent, NoResultsPageComponent],
})
export class SearchSharedMod {}
