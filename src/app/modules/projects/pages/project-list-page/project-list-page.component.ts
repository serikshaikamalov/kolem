import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/kolem.service';

// SEO: Meta
import { Meta, Title } from '@angular/platform-browser';

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
    
    constructor(
        private service: ProjectsService,
        private meta: Meta,
        private titleService: Title
    ) {
        this.setTitle();
        this.setMetaData();
     }

    ngOnInit(): void {        
        this.loadMenu();
        this.loadData();
    }
    
    /**
     * SEO: Title
     */
    public setTitle(){        
        this.titleService.setTitle('Kolem Architecture');
    }

    /**
     * SEO: Meta data
     */
    public setMetaData(){
        this.meta.addTag(
            {
                name: 'description', 
                content: 'Архитектурное бюро предлагает своим клиентам весь спектр услуг по архитектуре и дизайну частных и коммерческих интерьеров'
        });
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

        this.service.getProjects().subscribe(
            result =>{
                console.log('API projects: ', result);
                this.projects = result;                
                this.allProjects = result;   

                // Sort
                
            },
            error => {  
                console.log('Eror: ', error);
            }
        )

        // this.projects.push(
        //     {
        //         Id: 1,
        //         Title: 'ВИЗУАЛИЗАЦИЯ LARSON BERGQUIST HOUSE SCHROEDER, США',
        //         TypeId: 3,
        //         ImageSrc: '../assets/images/02_1.png'
        //     },
        //     {
        //         Id: 2,
        //         Title: 'РЕКОНСТРУКЦИЯ ФАСАДА ЗДАНИЙ ГОРОДСКОГО СУДА Г. АЛМАТЫ',
        //         TypeId: 1,
        //         ImageSrc: '../assets/images/01_1.png'
        //     },
        //     {
        //         Id: 3,
        //         Title: 'ДИЗАЙН ИНТЕРЬЕРА 1-КОМНАТНОЙ КВАРТИРЫ АЛМАТЫ, КАЗАХСТАН',
        //         TypeId: 2,
        //         ImageSrc: '../assets/images/03_1.png'
        //     }                              
        // );

        // this.allProjects = this.projects;        
    }


    /**
     * FILTER
     */
    public filterByProjetType( typeId: number = 0 ){     
        this.typeId = typeId;   

        if( typeId ){
            this.projects = this.allProjects.filter( x => x.type == typeId );

        }else{
            this.projects = this.allProjects;
        }

    }

}
