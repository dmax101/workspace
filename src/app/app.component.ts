import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import 'reflect-metadata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    CarouselComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
