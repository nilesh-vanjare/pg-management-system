import { Component } from '@angular/core';
import { MatNavList } from "@angular/material/list";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterOutlet, RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatCard } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-admin-layout',
  imports: [MatNavList, MatSidenav, MatSidenavContainer, MatToolbar, RouterOutlet, MatIcon, MatListModule, RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
