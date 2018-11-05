import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-details-page',
    templateUrl: './project-details-page.component.html',
    styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {
    
    public projectId: number;
    public project: any;
    public projects: any[] = [];
    
    constructor( 
        private route: ActivatedRoute
     ) { }

    ngOnInit(): void { 

        this.loadData();

        this.route.params.subscribe( params => {
            this.projectId = params['id'];
            // console.log(this.projectId);

            if( this.projectId ){
                this.project = this.projects.filter( x => x.Id == this.projectId ).shift();
                console.log(this.project);
            }

            

        } );
        
    }

    /**
     * Projects
     */
    public loadData(){

        this.projects.push(
            {
                Id: 1,
                Title: 'ДИЗАЙН 1-КОМНАТНОЙ КВАРТИРЫ В Г. АЛМАТЫ',
                Images: 
                    {
                        MainImageSrc: 'interier_01_details_header.png',
                        SingleColumnImages: [
                            'interier_01.png',
                            'interier_01_02.png'
                        ],
                        TwoColumnImages: [
                            'interier_01_short_01.png',
                            'interier_01_short_01.png'
                        ]
                },
                Meta: {
                    Year: '2011',
                    Status: 'Концепция',
                    Area: '56 м2',
                    Location: 'г. Алматы, Казахстан'
                }
                
            },
            {
                Id: 2,
                Title: 'РЕКОНСТРУКЦИЯ ФАСАДА ЗДАНИЙ ГОРОДСКОГО СУДА Г. АЛМАТЫ',
                Images: 
                    {
                        MainImageSrc: 'judge_main.png',
                        SingleColumnImages: [
                            'jadge_single.png'                            
                        ]                        
                    },
                Meta: {
                    Year: '2017',
                    Status: 'Реализован',
                    Area: '56 м2',
                    Location: 'г. Алматы, Казахстан'
                }
                
            },
            {
                Id: 3,
                Title: 'ВИЗУАЛИЗАЦИЯ LARSON BERGQUIST HOUSE SCHROEDER, США',
                Images: 
                    {
                        MainImageSrc: 'usa_main.png',
                        SingleColumnImages: [
                            'final_schema.png',
                            'final_view_01_day.png',
                            'final_view_01_night.png',
                            'final_view_02_day_cloudy.png',
                            'final_facade.png',
                            '3d_section_and_plan.png',
                            '3d_section_and_plan_02.png',
                            'final_section2.png'              
                        ]                        
                    },
                Meta: {
                    Year: '2018',
                    Status: 'Маркетинг',
                    Area: '56 м2',
                    Location: ' SCHROEDER, США'
                }
                
            }
        );


    }   


}
