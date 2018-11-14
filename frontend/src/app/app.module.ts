import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  ButtonModule,
  ConfirmationService,
  ConfirmDialogModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  GrowlModule,
  InputTextareaModule,
  InputTextModule,
  KeyFilterModule,
  SliderModule
} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {HttpClientModule} from '@angular/common/http';
import {HttpRequestService} from './services/http.service';
import {LaureateService} from './services/laureate.service';
import {LaureateListComponent} from './laureate-list/laureate-list.component';
import {LaureateDetailsComponent} from './laureate-details/laureate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LaureateListComponent,
    LaureateDetailsComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    SliderModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextareaModule,
    KeyFilterModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    LaureateService,
    HttpRequestService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
