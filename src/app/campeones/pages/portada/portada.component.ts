import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CampeonesService } from '../../services/campeones.service';
import { Campeon } from '../../interfaces/campeones.interface';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  @ViewChild('imageContainer') imageContainer: ElementRef | undefined;
  currentChampion: Campeon | null = null;
  prueba: any;
  newArray: any = []
  currentIndex: number = 0;
  current: number = 0;

  campeones: Campeon[] = [];
  urlImagenes: any[] = [
    {
      nombre: 'Ezreal',
      url: '../../../../assets/img/imagenes-portada/Ezreal-portada.png',
    },
    {
      nombre: 'Jayce',
      url: '../../../../assets/img/imagenes-portada/Jayce-portada.png',
    },
    {
      nombre: 'Lee Sin',
      url: '../../../../assets/img/imagenes-portada/Lee Sin-portada.png',
    },
    {
      nombre: 'Morgana',
      url: '../../../../assets/img/imagenes-portada/Morgana-portada.png',
    },
    {
      nombre: 'Zed',
      url: '../../../../assets/img/imagenes-portada/Zed-portada.png', 
    }
  ];

  constructor(
    private campeonesService: CampeonesService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadImages();
    this.getCampeones();

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.urlImagenes.length;
      this.displayInfo();

    }, 2000)
  }
  
  getCampeones() {
    this.campeonesService.getCampeones().subscribe((data: any) => {
      this.campeones = Object.values(data.data);
      console.log(this.campeones);
    });
  }

  displayInfo() {
    const test = [
      'Ezreal',
      'Jayce',
      'Lee Sin',
      'Morgana',
      'Zed'
    ]

    const testTwo = test.map(nombre => {
      const testTree = this.campeones.find((c) => c.name === nombre)
      this.prueba = testTree;
      if (this.newArray.length <= 4) {
        this.newArray.push(this.prueba);
        this.current = (this.current + 1) % this.newArray.length;
      }
      
      
      return nombre;
    }
    )
  }

  displayChampionInfo(imgUrl: string) {
    
    const imageName = this.extractImageName(imgUrl);
    console.log(imageName);

    

    if (imageName) {
      const champion = this.campeones.find((champ) => champ.name === imageName);

      if (champion) {
        this.currentChampion = champion;
      }
    }
  }
  hideChampionInfo() {
    this.currentChampion = null;
  }

  private extractImageName(imgUrl: string): string | null {
    const parts = imgUrl.split('/');
    const imageNameWithExtension = parts[parts.length - 1];
    const imageName = imageNameWithExtension.split('-')[0];
    return imageName;
  }

  loadImages() {
    const firstImage = new Image();
    firstImage.src = this.urlImagenes[0];
    firstImage.onload = () => {
      this.currentIndex = 0;
      this.showImage();
    };
  }

  showImage() {
    if (this.imageContainer && this.imageContainer.nativeElement) {
      const images =
        this.imageContainer.nativeElement.querySelectorAll('.image');
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
}
