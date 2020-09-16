import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from '@angular/material/input';
import HomeComponent from './home.component';
import { FeedComponent } from '../feed/feed.component';

const routes: Routes = [
  {  path: '', component: HomeComponent, data: { title: 'Home' }}
];

@NgModule({
    declarations: [HomeComponent, FeedComponent],
    exports: [HomeComponent],
    imports: [
        RouterModule.forChild(routes),
        // SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTabsModule,
    ],
    entryComponents: [],
    providers: [],
})
export class HomeModule {}
  