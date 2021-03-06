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
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@NgModule({
  declarations: [PaginatorComponent],
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
    MatDialogModule,
    MatProgressSpinnerModule
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
    MatDialogModule,
    MatProgressSpinnerModule,

    // declarations
    PaginatorComponent
  ]
})
export class SharedModule {}
