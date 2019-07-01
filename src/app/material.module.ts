import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTreeModule
} from '@angular/material';

const modulesMaterial = [
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatButtonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatListModule,
      MatStepperModule,
      MatTabsModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatDialogModule,
      MatTableModule,
      MatPaginatorModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatTreeModule
];

@NgModule({
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    modulesMaterial,
  ],
  declarations: [  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    modulesMaterial,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class MaterialModule { }
