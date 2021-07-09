import { Component, OnInit } from '@angular/core';
import { ProjectClass } from 'src/app/models/projects';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  lang:string;
  
  projectsClass:ProjectClass = new ProjectClass();

  projectObjects:{
      type:string,
      href:string,
      photoPath:string,
      githubUrl:string,
      description:string
    }[];

  // projectObjects:{
  //   type:string,
  //   href:string,
  //   photoPath:string,
  //   githubUrl:string,
  //   description:string
  // }[] = [
  //   {
  //     type:"project",
  //     href:"https://github.com/sylwancaspar/homepage",
  //     githubUrl:"https://github.com/sylwancaspar/homepage",
  //     photoPath:"./assets/img/projects/webbPortfolio.png",
  //     description:"Webbportfolion är helt klientbaserad och byggd med Node.js, Sass, html och JavaScript. Projektet består av fyra sidor en Välkomstsida, CV, portfolio och en rest API för att skicka E-post."
  //   },
  //   {
  //     type:"project",
  //     href:"https://casparsylwan.github.io/movienight/",
  //     githubUrl:"https://github.com/casparsylwan/movienight",
  //     photoPath:"./assets/img/projects/movie.png",
  //     description:
  //     "(Work in progress) En biografhemsida där det går att beställa godis,"+
  //     "mat och dryck till 20 personer. Detta levereras sedan till sittplatsen." +
  //     "Alla beställningar separeras så att det ska bli lätt att se vem som ska betala vad." +
  //     "Projektet är helt gjort med Angular. Alla animationer är gjorda med CSS och TypeScript." +
  //     "Sista sidan när det kommer till betalning är borttagen så att ingen ska bli lurad."
  //   },
  //   {
  //     type:"project",
  //     href:"https://casparsylwan.github.io/TravelAgency/login",
  //     githubUrl:"https://github.com/casparsylwan/TravelAgency",
  //     photoPath:"./assets/img/projects/flyux.png",
  //     description:
  //     "(Work in progress) Beställ en resa med FlyUX. Detta projekt är fronted till projektet och ligger på Github-pages."+
  //     "Det hör ihop med backend FlyUx som är byggt med Spring boot och Postgress sql." +
  //     "En automatisk build pipline är byggd till Heroku." 
  //   },
  //   {
  //     type:"project",
  //     href:"https://casparsylwan.github.io/TravelAgency/login",
  //     githubUrl:"https://github.com/casparsylwan/TravelAgencyBackend",
  //     photoPath:"./assets/img/projects/flyux-backend.png",
  //     description:
  //     "(Work in progress) Beställ en resa med FlyUX. Detta projekt är Backend till projektet och ligger på Heroku."+
  //     "Det hör ihop med backend FlyUx som är byggt med Spring boot och Postgress sql." +
  //     "En automatisk build pipline är byggd till Heroku." 
  //   }
  // ]

  constructor(private state:StateService) { }

  ngOnInit(): void {

    this.state.language.subscribe((lang)=>{
      this.lang = lang;
      this.changeLange(lang);
    })
  }

  changeLange(lang:string)
  {
    if(lang == 'sv')
    {
      this.projectObjects = this.projectsClass.projectsListSv();
    }
    else
    {
      this.projectObjects = this.projectsClass.projectsListEng();
    }

  }

  getUrl(urlString)
  {
    return  "url('" + urlString + "')";
  }

}
