import {Component, ElementRef} from "@angular/core";
import {ProjectService} from "../../services/project.search.service";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent {
  projectNames: string[];
  email: string;
  password: string;
  project: string;
  projects: any[];
  tasks: any[];
  token: string;
  filteredNames: string[];

  constructor(private _projectService: ProjectService) {
    this.project='';
    this.projectNames=[];
    this.filteredNames=[];
    this.token = null;
  }

  getProjectNames() {
    this._projectService.getProjects(this.token)
      .map(obj => obj.map(el => el.name))
      .subscribe(projectNames => this.projectNames = projectNames)
  }

  login(){
    this._projectService.updateUser(this.email, this.password);
    this._projectService.login()
      .subscribe(res => this.token = res.token);
  }

  searchProject() {
    this._projectService.getProjects(this.token, this.project).subscribe(projects => this.projects=projects);
  }

  filter() {
    if (this.project !== ""){
      console.log(this.projectNames)
      this.filteredNames = this.projectNames.filter(el => el.toLowerCase().indexOf(this.project.toLowerCase()) > -1);
    }else{
      this.filteredNames = [];
    }
  }

  select(item:string){
    this.project = item;
    this.filteredNames = [];
  }

}
