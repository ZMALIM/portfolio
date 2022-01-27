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
            title: 'Diseño web',
            description: `Conocer las tendencias y estándares
            relacionados con los sitios web actuales tomando
            en cuenta los estándares de HTML5, CSS3 y Sitios Web.`
        },
        {
            icon: 'icofont-code',
            title: 'Desarrollo web',
            description: `Desarrollo de aplicaciones a medida,
            aplicando las últimas tendencias y estándares relacionadas
            con la tecnología web y diseño.`
        },
        {
            icon: 'icofont-automation',
            title: 'Mantenimiento web',
            description: `Asegurar y
            gestionar el correcto funcionamiento de los sitios web
            en dispositivos móviles, tablets y pantallas computadoras
            personales.`
        },
    ]

}
