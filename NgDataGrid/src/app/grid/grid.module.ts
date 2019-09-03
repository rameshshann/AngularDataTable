import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PagerService } from './service/pager.service';

@NgModule({
  declarations: [GridComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [PagerService]
})
export class GridModule { }
