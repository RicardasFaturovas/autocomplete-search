import { Component } from '@angular/core';
import {ProjectService} from "./services/project.search.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ProjectService]
})
export class AppComponent  { name = 'Angular'; }
