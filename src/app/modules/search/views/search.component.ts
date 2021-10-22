import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initSearchForm()
   }

  ngOnInit(): void {
  }

  initSearchForm(){
    this.searchForm = this.fb.group({
      locality: '',
      postalCode: '',
      province: '',
      type: ''
    })
  }
}
