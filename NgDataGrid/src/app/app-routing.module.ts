import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid/grid.component';

const routes: Routes = [
  {path: '', component: GridComponent, pathMatch: 'full', data: {title: 'Ng Data Grid'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
