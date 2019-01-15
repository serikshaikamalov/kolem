import { Component, OnInit } from '@angular/core';


import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'service-page',
    templateUrl: './service-page.component.html',
    styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('Услуги | Kolem Architecture');
        this.meta.updateTag({
            'description': 'Архитектурное бюро предлагает своим клиентам весь спектр услуг по архитектурному проектированию и дизайну интерьера, а также предоставляет услуги по 3D визуализации, разработке макетов, производству мебели и деревянных изделий.'
        });
     }

    ngOnInit(): void { }
}
