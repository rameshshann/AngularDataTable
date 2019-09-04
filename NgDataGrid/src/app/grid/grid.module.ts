import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PagerService } from './service/pager.service';
import { GridFilterPipe } from './pipe/grid-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridComponent, GridFilterPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [PagerService, GridFilterPipe]
})
export class GridModule { }
