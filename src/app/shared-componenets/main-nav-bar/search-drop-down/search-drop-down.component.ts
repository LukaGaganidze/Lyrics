import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-drop-down',
  templateUrl: './search-drop-down.component.html',
  styleUrls: ['./search-drop-down.component.scss'],
})
export class SearchDropDownComponent {
  @Input() active = false;
}
