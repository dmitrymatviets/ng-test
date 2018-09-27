import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Calendar } from './ui/calendar/calendar';

@NgModule({
  declarations: [
    Calendar
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Calendar]
})
export class AppModule { }
