import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstFormComponent } from "./first-form/first-form.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QualificationDetailsComponent } from "./qualification-details/qualification-details.component";
import { IdentityDocsComponent } from "./identity-docs/identity-docs.component";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { NomineeDeatilsComponent } from "./nominee-deatils/nominee-deatils.component";
import { PracticeComponent } from "./practice/practice.component";
import { UserLoginComponent } from "./assignments/user-login/user-login.component";
import { ThemeComponent } from "./practice/theme/theme.component";
import { ThemeSerService } from './practice/theme-ser.service';
import { DynamicComponent } from "./dynamic/dynamic.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ChildComponent } from "./user-profile/child/child.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FirstFormComponent, ReactiveFormsModule, CommonModule, QualificationDetailsComponent, IdentityDocsComponent, AssignmentsComponent, NomineeDeatilsComponent, PracticeComponent, DynamicFormComponent],
    providers:[ThemeSerService]
})
export class AppComponent {
  title = 'ranjan_page';

  constructor(private theme: ThemeSerService) {}
  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  ngOnInit(): void {
    
  }

  
}
