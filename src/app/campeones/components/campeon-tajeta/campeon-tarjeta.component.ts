import { Component, Input } from '@angular/core';
import { Campeon } from '../../interfaces/campeones.interface';

@Component({
  selector: 'app-campeon-tajerta',
  templateUrl: './campeon-tarjeta.component.html',
  styleUrls: ['./campeon-tarjeta.component.scss']
})
export class CampeonTajertaComponent {

  @Input() campeon!: Campeon

}
