import { Component, Input } from '@angular/core';
import { Campeon } from '../../interfaces/campeones.interface';

@Component({
  selector: 'app-campeon-tajerta',
  templateUrl: './campeon-tarjeta.component.html',
  styleUrls: ['./campeon-tarjeta.component.css'],
  styles: [`
  mat-card {
    margin-top: 20px;
  }
  
  `

  ]
})
export class CampeonTajertaComponent {

  @Input() campeon!: Campeon

}
