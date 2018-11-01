import { Component, OnInit } from '@angular/core';

declare var DG;

@Component({
    selector: 'contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss']
})

export class ContactsIndexPageComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {                 

    }


    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

        let map;

        DG.then(function () {
            map = DG.map('map', {
                center: [43.263154, 76.940571],
                zoom: 17
            }
            );

            DG.marker([43.263154, 76.940571]).addTo(map).bindPopup('Kolem Architecture!');
        });
        
    }
}
