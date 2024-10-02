import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberConverterOutputComponent } from './number-converter-output/number-converter-output.component';
import { NumberConverterFormComponent } from './number-converter-form/number-converter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberConverterOutputComponent,
    NumberConverterFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
