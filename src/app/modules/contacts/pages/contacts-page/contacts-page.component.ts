import { Component, OnInit } from '@angular/core';

/**
 * SEO
 */
import { Title, Meta } from '@angular/platform-browser';

/**
 * FORM
 */
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Services
 */
import { ContactService } from '../../services/contact.service';

declare var DG;

@Component({
    selector: 'contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss']
})

export class ContactsIndexPageComponent implements OnInit {


    public contactForm: FormGroup;
    
    public isMessageSent: boolean = false;

    constructor(
        private title: Title,
        private meta: Meta,
        private formBuilder: FormBuilder,
        private contactService: ContactService
    ) {
        this.title.setTitle('Контакты | Kolem Architecture');
        this.meta.updateTag({
            'description': 'БЦ Алматыгипрогор, Абылай хана проспект, 60 Алматы, Казахстан'
        });
     }

    ngOnInit(): void {                 
        
        // Form: Init
        this.initForm();
    }

    /**
     * Form: Init
     */
    public initForm(){
        this.contactForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required]
        });
    }


    /**
     * Form: Easy access to controls
     */
    get f() { return this.contactForm.controls; }

    /**
     * Form: Submit
     */
    public onSubmit(){
                        
        // FormData: Validation
        if (this.contactForm.invalid) { return; }

        
        // FormData: Collect
        const formData = {
            firstName: this.f.firstName.value,
            phoneNumber: this.f.phoneNumber.value,
            email: this.f.email.value,
            message: this.f.message.value
        }

        console.log('Form Data: ', formData);


        this.contactService.sendEmail(formData)            
            .subscribe(( result )=>{
                this.isMessageSent = true;
        },
        (error)=>{                        
        });
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
