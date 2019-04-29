import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class MaterialModule { }
