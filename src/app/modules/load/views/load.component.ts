import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  opciones: string[] = ["Seleccionar todas", "Catalunya", "Comunitat Valenciana", "Euskadi"]

  constructor() { }

  ngOnInit(): void {
  }
}
