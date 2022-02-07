import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})

/**
 * Skills component
 */
export class SkillsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    skillsData = [
        {
            icon: 'icofont-interface',
            title: 'Front-end',
            skills: [
                {
                    name: 'HTML5',
                    level: '90%'
                },
                {
                    name: 'CSS3',
                    level: '75%'
                },
                {
                    name: 'Bootstrap',
                    level: '70%'
                },
                {
                    name: 'JavaScript',
                    level: '85%'
                },
                {
                    name: 'Angular',
                    level: '85%'
                },
                {
                    name: 'React',
                    level: '40%'
                },
            ]
        },
        {
            icon: 'icofont-console',
            title: 'Back-end',
            skills: [
                {
                    name: 'PHP',
                    level: '85%'
                },
                {
                    name: 'TypeScript',
                    level: '80%'
                },
                {
                    name: 'Node.js',
                    level: '70%'
                },
                {
                    name: 'NestJS',
                    level: '70%'
                },
                {
                    name: 'MySQL',
                    level: '70%'
                },
                {
                    name: 'MongoDB',
                    level: '70%'
                },
            ]
        },
        {
            icon: 'icofont-tools',
            title: 'Otros',
            skills: [
                {
                    name: 'Git',
                    level: '85%',
                },
                {
                    name: 'CI/CD',
                    level: '50%',
                },
                {
                    name: 'Nginx',
                    level: '60%',
                },
                {
                    name: '.NET ',
                    level: '80%',
                },
                {
                    name: 'C#',
                    level: '85%',
                },
                {
                    name: 'Api Rest',
                    level: '90%',
                },
            ]
        },
    ]

}
