import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FeedsComponent} from './feeds.component';

const routes: Routes = [
  {path: '', component: FeedsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedsComponent],
  providers: []
})
export class FeedsModule {
}
