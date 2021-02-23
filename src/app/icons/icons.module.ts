import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconCrossComponent } from './components/icon-cross/icon-cross.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [IconCrossComponent, IconNavComponent, IconDeleteComponent, IconEditComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconCrossComponent, IconNavComponent, IconDeleteComponent, IconEditComponent]
})
export class IconsModule { }
