import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators'
import { CampeonesService } from '../../services/campeones.service';
import { Campeon, Skill } from '../../interfaces/campeones.interface';
import { FormControl } from '@angular/forms';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Pagination]);
@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styleUrls: ['./campeon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CampeonComponent implements OnInit, AfterViewInit {
  @ViewChild('skillSelectedHtml') skillSelectedHtml!: ElementRef;
  baseUrl: string = 'https://ddragon.leagueoflegends.com/cdn';
  campeon!: Campeon;
  campeonKey!: string;
  skillsControl!: FormControl;
  thumbsSwiper: any;  

  constructor( 
    private activatedRoute: ActivatedRoute,
    private campeonesService: CampeonesService,
    private router: Router ) {
    this.skillsControl = new FormControl(null);

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        tap( ({ champion }) => {
          this.campeonKey = champion;
        }),
        switchMap( ({ champion })  => this.campeonesService.getCampeonPorId( champion ) ),
        map((champion) => {
          const {data, version} = champion;
          let skills: Skill[] = [];
          skills.push(this.mapSkills(data[this.campeonKey].passive, version));
          
          for(let i = 0; i < data[this.campeonKey].spells.length; i++) {
            skills.push(this.mapSkills(data[this.campeonKey].spells[i], version, i));
          }
          champion.data[this.campeonKey].skills = skills;
          return champion;
        })
      )
      .subscribe( ({ data }) => {
        this.campeon = data[this.campeonKey];
        console.log(this.campeon);
      });
      this.skillsControlObservable();

  };

  ngAfterViewInit(): void {

  }

  skillsControlObservable(): void {
    this.skillsControl.valueChanges.subscribe((skillName: string) => {
      this.showSkills(skillName);
      // this.fadeAnimation = !this.fadeAnimation;
    })
  }
  regresar() {
    this.router.navigate(['/campeones/listado'])
  }
  
  mapSkills(element: any, version: string, index: number = 5,): Skill {
    let key = '';
    let {id, name, description, image} = element;
    switch (index) {
      case 0:
        key = 'Q'
        break;
      case 1:
        key = 'W'
        break;
      case 2:
        key = 'E'
        break;
      case 3:
        key = 'R'
        break;
      default:
        key = 'Pasiva'
        break;
    }
    return {
      checked: false,
      name,
      description,
      img: `${this.baseUrl}/${version}/img/${image.group}/${image.full}`,
      key
    }
  };

  showSkills(skillName: string): void {
    let index = this.campeon.skills.findIndex((skill: Skill) => skill.name === skillName);
    for(let skill of this.campeon.skills) {
      skill.checked = false;
    };
    this.campeon.skills[index].checked = true;
    if(this.skillSelectedHtml) {
      this.skillSelectedHtml.nativeElement.innerHTML = this.showSkillSelectedHTML(index);
    }

  }

  showSkillSelectedHTML(index: number): string {
    return `
      <p class="skill">${this.campeon.skills[index].key}</p>
      <h4>${this.campeon.skills[index].name}</h4>
      <p class="texto-campeon">${this.campeon.skills[index].description}</p>
    `;
  }

  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }


}
