import { LoadService } from './../services/load.service';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { concat, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  private url: string = "";

  todasCheck: boolean = false;

  catalunyaCheck: boolean = false;
  isCatalunyaDisable: boolean = false;

  valenciaCheck: boolean = false;
  isValenciaDisable: boolean = false;

  euskadiCheck: boolean = false;
  isEuskadiDisable: boolean = false;

  cargando: boolean = false;

  libs: Observable<any>;

  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.loadService.delete().subscribe()
  }

  cancelar() {
    this.todasCheck = false;
    this.catalunyaCheck = false;
    this.valenciaCheck = false;
    this.euskadiCheck = false;
  }

  cargar() {
    this.cargando = true

    if(this.catalunyaCheck) {
      this.catalunyaCheck = false;
      this.isCatalunyaDisable = true;
    }
    if(this.valenciaCheck) {
      this.valenciaCheck = false;
      this.isValenciaDisable = true;
    } 
    if(this.euskadiCheck) {
      this.euskadiCheck = false;
      this.isEuskadiDisable = true;
    } 

    this.libs = this.loadService.cargar(this.url).pipe(
      finalize(() => {
        this.url = "";
        this.cargando = false
      })
    );
  }

  todas(event: boolean) {
    this.todasCheck = event;
    if(this.todasCheck) {
      this.catalunyaCheck = true;
      this.valenciaCheck = true;
      this.euskadiCheck = true;
      this.url = "";
      this.url = "ca=cat&ca=val&ca=eus"
    } else {
      this.catalunyaCheck = false;
      this.valenciaCheck = false;
      this.euskadiCheck = false;
      this.url = "";
    }
  }

  catalunya(event: boolean) {
    this.catalunyaCheck = event;
    if(event && this.url.length == 0) this.url = "ca=cat"
    else if(event && this.url.length != 0) this.url += "&ca=cat"
    else {
      this.todasCheck = false;
      this.url = this.url.replace("&ca=cat", "")
      this.url = this.url.replace("ca=cat", "")
      if(this.url.length == 7 || this.url.length == 14) this.url = this.url.replace("&", "")
    }
  }

  valencia(event: boolean) {
    this.valenciaCheck = event;
    if(event && this.url.length == 0) this.url = "ca=val"
    else if(event && this.url.length != 0) this.url += "&ca=val"
    else {
      this.todasCheck = false;
      this.url = this.url.replace("&ca=val", "")
      this.url = this.url.replace("ca=val", "")
      if(this.url.length == 7 || this.url.length == 14) this.url = this.url.replace("&", "")
    }
  }

  euskadi(event: boolean) {
    this.euskadiCheck = event;
    if(event && this.url.length == 0) this.url = "ca=eus"
    else if(event && this.url.length != 0) this.url += "&ca=eus"
    else {
      this.todasCheck = false;
      this.url = this.url.replace("&ca=eus", "")
      this.url = this.url.replace("ca=eus", "")
      if(this.url.length == 7 || this.url.length == 14) this.url = this.url.replace("&", "")
    }
  }

}
