import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule} from '@angular/material';
import {BookStoreService} from './book-store.service';
import {HttpClientModule} from '@angular/common/http';
import {BookReactiveService} from './book-reactive-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    BookStoreService,
    BookReactiveService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
