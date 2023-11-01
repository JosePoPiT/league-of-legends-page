import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  map: string = '../../../../assets/img/imagenes-informacion/mapa.jpg';
  mapInformation: string =
    'El Campo de la Justicia más antiguo y venerado se conoce como Grieta del Invocador. Este campo de batalla es conocido por los constantes conflictos que se libran entre dos grupos opuestos de Invocadores. Recorre uno de los tres caminos diferentes para atacar a tu enemigo en su punto más débil. ¡Trabaja con tus aliados para asediar la base enemiga y destruir su Nexus! Hay tres rutas principales en Summoners Rift, a saber: carril superior, carril central y carril inferior. Cada carril tiene dos torretas exteriores y campeones asignados . El carril superior está formado por campeones de combate cuerpo a cuerpo, luchadores , asesinos y matones , o comúnmente conocidos como AD. El carril central está formado por magos o portadores de AP. El carril inferior está formado por tiradores o ADC, soportes y tanques . La jungla es una subcarril donde se asigna a los junglas para controlar las ventajas y preparar emboscadas .';
  constructor() {}

  ngOnInit(): void {}
}
