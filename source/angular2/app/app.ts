import {bootstrap} from 'angular2/platform/browser'
import {PhoneService} from './PhoneService';
import {AppComponent} from './AppComponent';

bootstrap(AppComponent, [PhoneService]);