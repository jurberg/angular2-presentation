import {Component} from 'angular2/core';
import {Phone} from './Phone';
import {PhoneService} from './PhoneService';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {

    public phones: Phone[];

    constructor(phoneService: PhoneService) {
        this.phones = phoneService.phones;
    }
}

