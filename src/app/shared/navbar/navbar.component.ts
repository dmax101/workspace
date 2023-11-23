import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, DrawerComponent],
})
export class NavbarComponent {}
