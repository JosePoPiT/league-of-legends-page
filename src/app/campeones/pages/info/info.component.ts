import { Component, OnInit } from '@angular/core';
import { mapas } from '../../../constants/mapas'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  map: string = '../../../../assets/img/imagenes-informacion/mapa.jpg';
  mapInformation: string = mapas.grieta;
  twistedMap: string = '../../../../assets/img/imagenes-informacion/twistedMap.jpg';
  twistedMapInfo: string = mapas.twisted;
  magmaMap: string = '../../../../assets/img/imagenes-informacion/magmaMap.jpg';
  magmaInfo: string = mapas.magma;
  dominionMap: string = '../../../../assets/img/imagenes-informacion/dominion.jpg';
  dominionInfo: string = mapas.dominion;
  constructor() {}

  ngOnInit(): void {}
}
