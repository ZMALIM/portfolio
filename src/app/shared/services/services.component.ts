import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})

/**
 * Services component
 */
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    servicesData = [
        {
            icon: 'icofont-paint',
            title: 'Diseño Web Innovador',
            description: `Exploro y aplico constantemente las últimas tendencias y
            estándares en el diseño web, incorporando de manera experta las especificaciones
            de HTML5 y CSS3, para crear experiencias de usuario modernas y atractivas en sitios web actuales.`
        },
        {
            icon: 'icofont-code',
            title: 'Desarrollo Web',
            description: `Diseño, desarrollo y optimización de aplicaciones y sistemas a medida,
            utilizando un amplio espectro de tecnologías y lenguajes de programación de última
            generación para lograr resultados excepcionales en una variedad de proyectos tecnológicos.`
        },
        {
            icon: 'icofont-automation',
            title: 'DevOps para Entrega Continua',
            description: `Ofrezco experiencia en DevOps para optimizar tus flujos de desarrollo y
            garantizar la entrega continua de aplicaciones y sistemas. Implementando prácticas y
            herramientas avanzadas,  aseguro una gestión eficiente en la entrega de aplicaciones y sistemas.`
        },
    ]

}
