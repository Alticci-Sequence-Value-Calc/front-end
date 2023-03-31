import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalculusComponent } from './calculus/calculus.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  declarations: [AppComponent, CalculusComponent, ResultListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
