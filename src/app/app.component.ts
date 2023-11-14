import { Component, OnInit } from '@angular/core';

import { GetTokenService } from 'src/api/get-token.service';

import { SearchService } from 'src/api/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private tokenSer: GetTokenService,
    private searchSer: SearchService
  ) {}
  ngOnInit(): void {
    this.tokenSer.getToken();
  }

  searchArtist() {
    this.searchSer.search('Rihana');
  }
}
