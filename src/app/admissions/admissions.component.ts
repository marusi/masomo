import { Component } from '@angular/core';

@Component({
  selector: 'app-admissions-component',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})

export class AdmissionsComponent {

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
 
}
