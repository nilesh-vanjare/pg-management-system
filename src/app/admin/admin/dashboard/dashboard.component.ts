import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MatSidenavContainer, MatSidenav } from "@angular/material/sidenav";
import { MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, MatSidenavContainer, MatNavList, MatSidenav, MatIcon, MatToolbar],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
