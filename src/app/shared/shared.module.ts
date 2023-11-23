import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    CarouselComponent,
  ],
  exports: [
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
