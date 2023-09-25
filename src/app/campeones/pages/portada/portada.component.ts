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

  currentIndex: number = 0;

  campeones: Campeon[] = [];
  urlImagenes: string[] = [
    '../../../../assets/img/imagenes-portada/Ezreal-portada.png',
    '../../../../assets/img/imagenes-portada/Jayce-portada.png',
    '../../../../assets/img/imagenes-portada/Lee Sin-portada.png',
    '../../../../assets/img/imagenes-portada/Morgana-portada.png',
    '../../../../assets/img/imagenes-portada/Zed-portada.png',
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
    }, 1500)
  }
  
  getCampeones() {
    this.campeonesService.getCampeones().subscribe((data: any) => {
      this.campeones = Object.values(data.data);
      console.log(this.campeones);
    });
  }

  displayChampionInfo(imgUrl: string) {
    const imageName = this.extractImageName(imgUrl);

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
