import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalPages: number = 15;
  @Input() currentPage: number = 1;
  @Input() visiblePages: number = 7;

  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  handlePageChange(nextPage) {
    this.pageChanged.emit(nextPage);
  }

  get hasNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  get pages(): number[] {
    const items = [];

    for (let page = 1; page <= this.totalPages; page++) {
      if (this.leftCollapsed && this.rightCollapsed) {
        const offset = Math.floor(this.visiblePages / 2) - 1;

        if (page >= this.currentPage - offset && page <= this.currentPage + offset) {
          items.push(page);
        }
      } else if (this.leftCollapsed) {
        const offset = Math.floor(this.visiblePages / 2);
        const spare = this.totalPages - offset - this.currentPage;

        if (page >= this.currentPage - offset + spare) {
          items.push(page);
        }
      } else if (this.rightCollapsed) {
        const offset = Math.floor(this.visiblePages / 2);
        const spare = offset - this.currentPage;

        if (page <= this.currentPage + offset + spare) {
          items.push(page);
        }
      } else {
        items.push(page);
      }
    }

    return items;
  }

  get hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  get leftCollapsed() {
    const margin = this.currentPage - Math.floor(this.visiblePages / 2);

    return margin > 1;
  }

  get rightCollapsed() {
    const margin = this.currentPage + Math.floor(this.visiblePages / 2);

    return this.totalPages > margin;
  }
}
