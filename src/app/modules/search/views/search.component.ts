import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { SearchService } from '../services/search.service';
import { Cities, City, Localities, Locality, Province, Provinces, LIBRARY_TYPES, Libraries } from '../models/search.interface';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  map: Map;
  cities: Cities = [];
  provinces: Provinces = [];
  localities: Localities = [];
  postalCode: number;
  libraryTypes = LIBRARY_TYPES;
  type: string;
  libraries: any = [{
    name: ""
  }];
  mapPoints: any = [];
  mark: any;
  vectorLayer: any;
  rasterLayer: any;

  allLibraries: Libraries = [];

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
    ) {
    this.initSearchForm()
  }

  ngOnInit(): void {
    this.getLocations();
    this.getAllLibraries();
    this.initMarks();
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        // this.rasterLayer,
        this.vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([ -3.683, 40.4]),
        zoom: 6
      })
    });
  }

  initSearchForm(){
    this.searchForm = this.fb.group({
      locality: '',
      postalCode: '',
      province: '',
      type: ''
    })
  }

  getAllLibraries(){
    this.searchService.getAllLibraries().subscribe(
      (res:Libraries) => {
        this.allLibraries = res;
        this.mapPoints = this.allLibraries.map(
          (item) => {
            return {
              longitude: item.longitude,
              latitude: item.latitude
            }
          }
        );
        console.log(this.mapPoints);
        console.log(this.allLibraries);
      }
    )
  }

  getLocations(){
    this.searchService.getLocations().subscribe(
      (res: Cities) => {
        this.cities = res;
      }
    )
  }

  getCity(event: City){
    this.provinces = event.provinces;
  }

  getProvince(event: Province){
    this.localities = event.localities;
  }

  getPostalCode(event: Locality){
    this.postalCode = event.id;
  }

  getType(event: string){
    this.type = event;
  }

  search(){
    this.searchService.getLibraries(
      this.searchForm.controls.locality.value.id,
      this.postalCode.toString(),
      this.searchForm.controls.province.value.id,
      this.searchForm.controls.type.value
    ).subscribe(
      (res:any) => {
        this.libraries = res;
      }
    )
  }

  initMarks() {
    this.mark = new Feature({
      geometry: new Point(olProj.fromLonLat([-3.683, 40.4]))
    })

    this.mark.setStyle(new Style({
      image: new Icon(({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: 'src\assets\mark.png',
        imgSize: [40, 40]
      }))
    }))
    this.drawMarks()
  }

  drawMarks() {
    this.mapPoints = new VectorSource({
      features: [this.mark]
    })

    this.vectorLayer = new VectorLayer({
      source: this.mapPoints
    })

    this.rasterLayer = new TileLayer({
      source: new OSM({
        url: 'https://api.tiles.mapbox.com/v3mapbox.geography-class.json?source',
        crossOrigin: ''
      })
    })

  }
}
