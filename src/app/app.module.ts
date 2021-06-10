import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomPinnedRowRenderer } from './custom-pinned-row-renderer';

@NgModule({
  declarations: [
    AppComponent,
    CustomPinnedRowRenderer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([CustomPinnedRowRenderer]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
