import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// ? for language
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,

    ShortenPipe,
    ReversePipe,
    SortPipe,
    FilterStatusPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
