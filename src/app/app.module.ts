import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { primengModule } from './core/primeng.module';
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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
