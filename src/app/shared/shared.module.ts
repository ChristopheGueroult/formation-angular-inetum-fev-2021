import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';

@NgModule({
  declarations: [TableLightComponent, BtnComponent],
  imports: [CommonModule],
  exports: [TableLightComponent, BtnComponent, TemplatesModule, IconsModule],
})
export class SharedModule {}
