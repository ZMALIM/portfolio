import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private renderer: Renderer2;
    private colorTheme: string;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    initTheme() {
        this.getColorTheme();
        document
            .getElementById('theme-opt')
            .setAttribute('href', `assets/css/themes/${this.colorTheme}.css`);
    }

    update(theme: 'dark' | 'light') {
        this.setColorTheme(theme);
        // const previousColorTheme = theme === 'dark' ? 'light' : 'dark';
        // document
        //     .getElementById('theme-opt')
        //     .setAttribute('href', `assets/css/themes/${previousColorTheme}.css`);
        document
            .getElementById('theme-opt')
            .setAttribute('href', `assets/css/themes/${theme}.css`);
    }

    isDarkMode() {
        return this.colorTheme === 'dark';
    }

    private setColorTheme(theme) {
        this.colorTheme = theme;
        localStorage.setItem('user-theme', theme);
    }

    private getColorTheme() {
        if (localStorage.getItem('user-theme')) {
            this.colorTheme = localStorage.getItem('user-theme');
        } else {
            this.colorTheme = 'light';
        }
    }
}
