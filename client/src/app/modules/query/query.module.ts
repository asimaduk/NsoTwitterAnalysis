import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QueryComponent} from './query.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {FeedItemComponent} from '../../components/feed-item/feed-item.component'
const routes: Routes = [
  {path: '', component: QueryComponent}
];

@NgModule({
    declarations: [QueryComponent, FeedItemComponent],
    exports: [QueryComponent],
    imports: [RouterModule.forChild(routes),SharedModule,MatIconModule],
    entryComponents: [],
    providers: [],
})
export class QueryModule {}
  