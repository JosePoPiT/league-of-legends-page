import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router) {
    console.log('PortadaComponent constructor called');
  }

  ngOnInit(): void {
    console.log('PortadaComponent ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('PortadaComponent ngOnDestroy called');
  }

  goToChampions() {
    this.router.navigate(['/campeones/listado']);
  }
}
