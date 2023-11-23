import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarComponent, DrawerComponent],
  exports: [NavbarComponent, DrawerComponent],
})
export class SharedModule {}
