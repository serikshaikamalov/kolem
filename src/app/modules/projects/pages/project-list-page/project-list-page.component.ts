import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project-list-page',
    templateUrl: './project-list-page.component.html',
    styleUrls: ['./project-list-page.component.scss']
})
export class ProjectListPageComponent implements OnInit {
    
    public typeId: number = 0;
    public projectTypes: any[] = [];
    public projects: any[] = [];
    public allProjects: any[] = [];
    
    constructor() { }

    ngOnInit(): void {        
        this.loadMenu();
        this.loadData();
    }



    /**
     * Menu
     */
    public loadMenu(){
        this.projectTypes.push(
            {                
                ProjectTypeId: 0,
                Title: 'Все'
            },
            {                
                ProjectTypeId: 1,
                Title: 'Архитектура'
            },
            {                
                ProjectTypeId: 2,
                Title: 'Интерьер'
            },
            {                
                ProjectTypeId: 3,
                Title: 'Визуализация'
            }
        );
    }


    /**
     * Projects
     */
    public loadData(){
        this.projects.push(
            {
                Id: 1,
                Title: 'ДИЗАЙН ИНТЕРЬЕРА 1-КОМНАТНОЙ КВАРТИРЫ АЛМАТЫ, КАЗАХСТАН',
                TypeId: 1,
                ImageSrc: '../assets/images/interier_01.png'
            },
            {
                Id: 2,
                Title: 'РЕКОНСТРУКЦИЯ ФАСАДА ЗДАНИЙ ГОРОДСКОГО СУДА Г. АЛМАТЫ',
                TypeId: 2,
                ImageSrc: '../assets/images/judge_center.png'
            },
            {
                Id: 1,
                Title: 'ДИЗАЙН ИНТЕРЬЕРА 1-КОМНАТНОЙ КВАРТИРЫ АЛМАТЫ, КАЗАХСТАН',
                TypeId: 3,
            },
            {
                Id: 1,
                Title: 'ДИЗАЙН ИНТЕРЬЕРА 1-КОМНАТНОЙ КВАРТИРЫ АЛМАТЫ, КАЗАХСТАН',
                TypeId: 2,
            },
        );

        this.allProjects = this.projects;        
    }


    /**
     * FILTER
     */
    public filterByProjetType( typeId: number = 0 ){     
        this.typeId = typeId;   

        if( typeId ){
            this.projects = this.allProjects.filter( x => x.TypeId == typeId );

        }else{
            this.projects = this.allProjects;
        }

    }

}
