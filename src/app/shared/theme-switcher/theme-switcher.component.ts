import { Component } from '@angular/core';

import { ThemeService } from './theme-switcher.service';

@Component({
    selector: 'theme-switcher',
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
    isDarkMode: boolean;
    showFiller = false;

    constructor(private themeService: ThemeService) {
        this.themeService.initTheme();
        this.isDarkMode = this.themeService.isDarkMode();
    }

    toggleSwitcher() {
        console.log(this.isDarkMode);
        this.isDarkMode = this.themeService.isDarkMode();
        this.isDarkMode
            ? this.themeService.update('light')
            : this.themeService.update('dark');
    }
}
