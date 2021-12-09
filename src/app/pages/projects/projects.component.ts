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
