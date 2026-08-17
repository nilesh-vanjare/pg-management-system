import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenav } from "@angular/material/sidenav";
import { MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-student-layout',
  imports: [MatSidenavContainer, MatSidenav, MatNavList, MatIcon, MatToolbar, RouterOutlet],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {

}
