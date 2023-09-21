import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginador-cards',
  templateUrl: './paginador-cards.component.html',
  styleUrls: ['./paginador-cards.component.scss']
})
export class PaginadorCardsComponent implements OnInit {

  @Input() campeones: any[] = [];
  pageSize = 8;
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

 

  get paginatedCampeones() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.campeones.slice(startIndex, startIndex + this.pageSize);
  }

}
