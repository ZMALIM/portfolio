import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./timeline.scss']
})

/**
 * Experiences component
 */
export class ExperiencesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    experiences = [
        {
            title: 'Desarrollador Back-end NodeJS',
            company: 'Payqa Soluciones S.A.C.',
            date: '02/08/2021  10/12/2021',
            location: 'Lima - Perú',
            description: `
                ● Desarrollo de tareas asignadas a través de JIRA (Atlassian)
                ● Desarrollo de API-REST Con NestJS, TypeORM, AUTH0
            `,
        },
        {
            title: 'Desarrollador Full Stack TypeScript',
            company: 'Autosense International',
            date: '01/06/2021  31/07/2021',
            location: 'California - EE.UU.',
            description: `
                ● Desarrollo de aplicación web para generación de reportes
                ● Desarrollo back-end con NestJS
            `,
        },
        {
            title: 'Desarrollador Full Stack TypeScript',
            company: 'RECOMSAC E.I.R.L.',
            date: '03/02/2020  31/05/2021',
            location: 'Lima - Perú',
            description: `
                ● Desarrollo del front-end con el framework Angular utilizando el patrón de arquitectura REDUX (NgRX) y tecnologías como WebSockets, Nx, NxJS
                ● Desarrollo del back-end principalmente bajo el entorno de LNMT (Linux-Nginx-MySQL-TypeScript) con el framework NestJS
            `,
        },
        {
            title: 'Programador de Sistemas Informáticos',
            company: 'Alpha Ingenieros E.I.R.L.',
            date: '09/01/2019  30/08/2019',
            location: 'Cusco - Perú',
            description: `
                ● Programación en el IDE Visual Studio 2019
                ● Implementación de bases de datos en SQL Server, MySQL
                ● Desarrollo de sistema web usando PHP, JavaScript
                ● Desarrollo de sistema de escritorio con C# y Delphi
            `,
        },
        {
            title: 'Desarrollador .NET',
            company: 'MACRO COMPUTER NET',
            date: '04/07/2016  23/02/2018',
            location: 'Cusco - Perú',
            description: `
                ● Creación de software de escritorio a medida para gestión empresarial, facturación electrónica,
                control de almacenes, inventaros utilizando como lenguaje de programación C#, y tecnologías como MVC, .NET Framework, .NET Core, Visual Studio, con base de datos en SQL Server
                ● Manejo y generación de reportes con FastReport y CrystalReport
            `,
        },
        {
            title: 'Desarrollador Full Stack .NET + NodeJS',
            company: 'MACRO COMPUTER NET',
            date: '09/01/2019  30/08/2019',
            location: 'Cusco - Perú',
            description: `
                ● Desarrollo de aplicación de escritorio con C#, .NET Framework, MVC
                ● Desarrollo de API-REST con Express (NodeJS)
                ● Despliegue de aplicaciones web sobre HEROKU
                ● Instalación, configuración y mantenimiento
            `,
        },
    ];
}
