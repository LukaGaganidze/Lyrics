import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { ModifiedAlbumsSearchResp } from '../../search-services/search-ser-type';
import { ModifiedArtistsSearchResp } from '../../search-services/search-ser-type';
import { ModifiedTracksSearchResp } from '../../search-services/search-ser-type';

import { SearcheManagerService } from '../../search-services/searche-manager.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

// Custom validator function for blank text
export function notBlankValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isWhitespace = (control.value || '').trim().length === 0;
  return isWhitespace ? { blank: true } : null;
}

@Component({
  selector: 'app-searrch-input-componnent',
  templateUrl: './searrch-input-componnent.component.html',
  styleUrls: [
    './searrch-input-componnent.component.scss',
    './loading-spinnter.componenet.scss',
  ],
})
export class SearrchInputComponnentComponent implements OnInit {
  @Input() searchBy: string = 'album';
  searchForm!: FormGroup;
  SearchLoadingStateObs$!: Observable<boolean>;

  constructor(private searchSer: SearcheManagerService) {
    // input form
    this.searchForm = new FormGroup({
      searchInput: new FormControl('', [
        Validators.required,
        notBlankValidator,
      ]),
    });
  }

  ngOnInit(): void {
    this.SearchLoadingStateObs$ = this.searchSer.SearchLoaderIndicator$;
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.searchSer.onSearch(this.searchBy, this.searchForm.value.searchInput);
    }
    this.searchForm.reset();
  }
}
