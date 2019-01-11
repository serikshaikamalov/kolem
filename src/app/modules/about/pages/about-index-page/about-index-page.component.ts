import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'about-index-page',
    templateUrl: './about-index-page.component.html',
    styleUrls: ['./about-index-page.component.scss']
})
export class AboutIndexPageComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta
    ) { }

    ngOnInit(): void {
        this.title.setTitle('О нас');
        this.meta.updateTag({
            'description': 'Welcome to home section'
        });
    }
}
