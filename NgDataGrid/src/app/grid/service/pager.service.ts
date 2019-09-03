
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
      const totalPages = Math.ceil(totalItems / pageSize);

      if (currentPage < 1) {
          currentPage = 1;
      } else if (currentPage > totalPages) {
          currentPage = totalPages;
      }

      let startPage: number, endPage: number;
      if (totalPages <= 10) {
          startPage = 1;
          endPage = totalPages;
      } else {
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages
      const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }
}
