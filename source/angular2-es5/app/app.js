(function() {
    'use strict';

    function PhoneService() {
        this.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'}
        ];
    }

    var AppComponent = ng.core
        .Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
        .Class({
            constructor: [PhoneService, function(PhoneService) {
                this.phones = PhoneService.phones;
            }]
        });

    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(AppComponent, [PhoneService]);
    });

})();


