import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    public skills: any[];

    constructor() { }

    public ngOnInit(): void {
        this.skills = [
            {
                icon: 'icofont-interface',
                title: 'Front-end',
                items: [
                    {
                        name: 'HTML5',
                        level: '90%',
                        icon: 'icon-html5',
                    },
                    {
                        name: 'CSS3',
                        level: '75%',
                        icon: 'icon-css3',
                    },
                    {
                        name: 'Bootstrap',
                        level: '70%',
                        icon: 'icon-bootstrap',
                    },
                    {
                        name: 'JavaScript',
                        level: '85%',
                        icon: 'icon-js',
                    },
                    {
                        name: 'Angular',
                        level: '85%',
                        icon: 'icon-angular',
                    },
                    {
                        name: 'React',
                        level: '40%',
                        icon: 'icon-react',
                    },
                ]
            },
            {
                icon: 'icofont-console',
                title: 'Back-end',
                items: [
                    {
                        name: 'PHP',
                        level: '85%',
                        icon: 'icon-php',
                    },
                    {
                        name: 'TypeScript',
                        level: '80%',
                        icon: 'icon-js',
                    },
                    {
                        name: 'Node.js',
                        level: '70%',
                        icon: 'icon-nodejs',
                    },
                    {
                        name: 'NestJS',
                        level: '70%',
                        icon: 'icon-opensource',
                    },
                    {
                        name: 'MySQL',
                        level: '70%',
                        icon: 'icon-mysql-alt',
                    },
                    {
                        name: 'MongoDB',
                        level: '70%',
                        icon: 'icon-mongodb',
                    },
                ]
            },
            {
                icon: 'icofont-tools',
                title: 'Otros',
                items: [
                    {
                        name: 'Git',
                        level: '85%',
                        icon: 'icon-git',
                    },
                    {
                        name: 'CI/CD',
                        level: '50%',
                        icon: 'icon-opensource',
                    },
                    {
                        name: 'Nginx',
                        level: '60%',
                        icon: 'icon-nginx',
                    },
                    {
                        name: '.NET ',
                        level: '80%',
                        icon: 'icon-opensource',
                    },
                    {
                        name: 'C#',
                        level: '85%',
                        icon: 'icon-csharp',
                    },
                    {
                        name: 'Api Rest',
                        level: '90%',
                        icon: 'icon-opensource',
                    },
                ]
            },
        ]
    }
}
