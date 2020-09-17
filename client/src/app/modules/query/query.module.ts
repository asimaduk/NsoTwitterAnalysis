import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QueryComponent} from './query.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {path: '', component: QueryComponent}
];

@NgModule({
    declarations: [QueryComponent],
    exports: [QueryComponent],
    imports: [RouterModule.forChild(routes),SharedModule,MatIconModule],
    entryComponents: [],
    providers: [],
})
export class QueryModule {}
  