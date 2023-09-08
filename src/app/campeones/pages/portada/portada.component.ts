import { Component, OnInit, Renderer2, ViewChild, ElementRef  } from '@angular/core';
import { CampeonesService } from '../../services/campeones.service';
import { Campeon } from '../../interfaces/campeones.interface';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'none' })),
      ], { params: { delay: '0' } })
    ])
  ]
})
export class PortadaComponent implements OnInit {
  @ViewChild('imageContainer') imageContainer: ElementRef | undefined;
  currentIndex: number = 0;

  campeones: Campeon[] = [];
  urlImagenes: string[] = [
    '../../../../assets/img/imagenes-portada/ezreal-portada.png',
    '../../../../assets/img/imagenes-portada/jayce-portada.png',
    '../../../../assets/img/imagenes-portada/lee-sin-portada.png',
    '../../../../assets/img/imagenes-portada/morgana-portada.png',
    '../../../../assets/img/imagenes-portada/zed-portada.png',
  ];

  constructor(private campeonesService: CampeonesService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadImages()
    console.log(this.urlImagenes);
    
    // this.cargarImagenes();
  }

  

  // onImageLoad() {
  //   this.currentIndex = (this.currentIndex + 1) % this.urlImagenes.length;
  // }

  getCampeones() {
    this.campeonesService.getCampeones().subscribe( (data: any ) => {
      this.campeones = Object.values( data.data )  
      console.log( this.campeones );

    })
  };
 
  loadImages() {
    const firstImage = new Image();
    firstImage.src = this.urlImagenes[0];
    firstImage.onload = () => {
      this.currentIndex = 0;
      this.showImage();
    };
  }

  // showImage() {
  //   const images = document.querySelectorAll('.image');
  //   images.forEach((image, index) => {
   
      
      
  //     image.classList.remove('active');
  //     if (index === this.currentIndex) {
  //       image.classList.add('active');
  //     }
  //   });
  // }
  showImage() {
    if (this.imageContainer && this.imageContainer.nativeElement) {
      const images = this.imageContainer.nativeElement.querySelectorAll('.image');
      images.forEach((image: any, index: any) => {
        if (index === this.currentIndex) {
          this.renderer.setStyle(image, 'opacity', '1');
        } else {
          this.renderer.setStyle(image, 'opacity', '0');
        }
      });
    }
  }

  onImageLoad() {
    this.currentIndex = (this.currentIndex + 1) % this.urlImagenes.length;
    this.showImage();
  }

  

  // cargarImagenes() {
  //   for (let i = 1; i <= 5; i++) {
  //     const imgUrl = `../../../../assets/img/imagenes-portada/${i}.png`;
  //     this.urlImagenes.push(imgUrl)
  //   }
  //   console.log(this.urlImagenes);
    
  // }

}
