import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

interface Phone {
    name: string;
    snippet: string;
}

var PHONES: Phone[] = [
    {'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.'}
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    public phones: Phone[] = PHONES;
}

bootstrap(AppComponent);