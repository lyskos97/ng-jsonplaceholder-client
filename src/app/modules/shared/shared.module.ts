import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    FlexLayoutModule,

    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class SharedModule {}
