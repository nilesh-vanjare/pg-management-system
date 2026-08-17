import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule } from '@angular/material/paginator';
import {  MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
MatSidenavModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatInputModule,
MatFormFieldModule,
MatTableModule,
MatPaginatorModule,
// MatSortModule
MatDialogModule,
MatSnackBarModule,
 MatListModule
// MatMenuModule
// MatTabsModule
// MatSelectModule
// MatDatepickerModule
// MatCheckboxModule
// MatRadioModule
// MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
