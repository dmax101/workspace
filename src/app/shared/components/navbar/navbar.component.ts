import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';
import { FooterComponent } from '../footer/footer.component';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, DrawerComponent, FooterComponent],
})
export class NavbarComponent implements OnDestroy {
  currentTheme: string = 'dark';
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.currentTheme$.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );
  }

  toggleTheme(): void {
    if (this.currentTheme == 'dark') {
      this.setTheme('cupcake');
      console.log('change theme to cupcake');
    } else {
      this.setTheme('dark');
      console.log('change theme to dark');
    }
  }

  setTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
