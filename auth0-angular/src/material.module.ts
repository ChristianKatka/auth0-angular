import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatProgressBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatProgressBarModule],
})
export class MaterialModule {}
