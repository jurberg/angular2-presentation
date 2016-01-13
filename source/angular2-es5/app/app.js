(function(app) {
    'use strict';

    app.PhoneService = function() {
        this.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'}
        ];
    };

    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
        .Class({
            constructor: [app.PhoneService, function(PhoneService) {
                this.phones = PhoneService.phones;
            }]
        });

})(window.app || (window.app = {}));


