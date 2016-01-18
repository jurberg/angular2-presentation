var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var PhoneService = (function () {
    function PhoneService() {
        this.phones = [
            { 'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.' },
            { 'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.' },
            { 'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.' }
        ];
    }
    return PhoneService;
})();
var AppComponent = (function () {
    function AppComponent(phoneService) {
        this.phones = phoneService.phones;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [PhoneService]);
//# sourceMappingURL=app.js.map