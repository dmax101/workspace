import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('dark');
  public currentTheme$: Observable<string> =
    this.currentThemeSubject.asObservable();

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentThemeSubject.next(theme);
  }
}
