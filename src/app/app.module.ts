import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { materialModule } from './core/material.module';
import { LoadModule } from './modules/load/load.module';
import { LoadComponent } from './modules/load/views/load.component';
import { SearchModule } from './modules/search/search.module';
import { SearchComponent } from './modules/search/views/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadModule,
    materialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
