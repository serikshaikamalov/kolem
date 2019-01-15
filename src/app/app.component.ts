import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public year: number;

    constructor(){
        this.year = new Date().getFullYear();
    }

}
