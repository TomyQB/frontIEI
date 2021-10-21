import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './views/search.component';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ SearchComponent ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class SearchModule { }
