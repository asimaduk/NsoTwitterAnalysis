import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoaderComponent} from "./components/loader/loader.component";
import {RouterModule} from "@angular/router";
import {FileUploadModule} from "primeng/fileupload";
import {ConfirmationService} from "primeng/api";
import {AppCacheProvider} from "./providers/app-cache-provider";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CommonModule} from "@angular/common";
import {AuthenticationActivateGuard} from "./auth/authenticationActivateGuard";
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {ErrorMessageComponent} from "./components/error-message/error-message.component";

import {AuthGuardLoginProvider} from "./auth/authGuardLoginProvider";
import {AutoCompleteModule} from 'primeng/autocomplete';
// import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {GlobalErrorHandler} from './services/global-error-handler.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AgGridModule} from "ag-grid-angular";
import {TooltipModule} from 'primeng/tooltip';
import {Ng5SliderModule} from 'ng5-slider';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {LoginModule} from '../login/login.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    RouterModule,
    FileUploadModule, ConfirmDialogModule,
    InputMaskModule, DropdownModule, AutoCompleteModule,
    // Ng4LoadingSpinnerModule.forRoot(),
    ProgressSpinnerModule, TooltipModule, CommonModule,
    Ng5SliderModule, MatDialogModule, MatSelectModule, MatIconModule, MatTableModule, MatTooltipModule,
    FormsModule, ReactiveFormsModule, LoginModule,
    AgGridModule.withComponents([]),
    MatSnackBarModule, MatGridListModule
  ],

  declarations: [
    LoaderComponent, ErrorMessageComponent
  ],

  providers: [
    ConfirmationService,
    AppCacheProvider,
    AuthenticationActivateGuard,
    AuthGuardLoginProvider, {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
  ],
  exports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    LoaderComponent,ErrorMessageComponent,
    FileUploadModule, ConfirmDialogModule,
    DropdownModule, AutoCompleteModule,
    // Ng4LoadingSpinnerModule,
    ProgressSpinnerModule, AgGridModule, TooltipModule, MatGridListModule
  ],
  entryComponents: [
    ErrorMessageComponent
  ],
})
export class SharedModule {
}

