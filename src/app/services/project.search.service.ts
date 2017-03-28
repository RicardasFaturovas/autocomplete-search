import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class ProjectService {
  private projectName: string;
  private email: string;
  private password: string;
  private token: string;

  constructor(private _http: Http) {
    console.log('project service ready');
  }

  login() {
    return this._http.post(`http://localhost:5000/users/login`, {email: this.email, password: this.password})
      .map(res=>res.json())
  }

  updateUser(email:string, password:string){
    this.email = email;
    this.password = password;
  }

  getProjects(token:string, projectName:string = '') {
    let headers = new Headers();
    headers.append('Accept','application/json');
    headers.append('authorization',token);
    if(projectName){
      return this._http.get(`http://localhost:5000/projects?name=${projectName}`,{headers: headers})
        .map(res=>res.json())
    }
    else return this._http.get(`http://localhost:5000/projects?`,{headers: headers})
      .map(res=>res.json())

  }
}
