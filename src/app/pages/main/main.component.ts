import { Component, OnInit } from '@angular/core';
import { ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    currentSection = 'home';
    ngxScrollToOffsetMap: ScrollToOffsetMap;

    ngOnInit(): void {
        this.ngxScrollToOffsetMap = new Map();
        this.ngxScrollToOffsetMap
          .set(480, 100)
          .set(768, 200)
          .set(1240, 300)
          .set(1920, 400);
    }

    /**
     * Window scroll method
     */
    windowScroll() {
        const navbar = document.getElementById('navbar');
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            navbar.style.backgroundColor = '#1a1a1a';
            navbar.style.padding = '15px 0px';
        }
        else {
            navbar.style.backgroundColor = '';
            navbar.style.padding = '20px';
        }
    }

    /**
     * Toggle navbar
     */
    toggleMenu() {
        document.getElementById('navbarCollapse').classList.toggle('show');
    }

    /**
     * Section changed method
     * @param sectionId specify the current sectionID
     */
    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
    }
}
