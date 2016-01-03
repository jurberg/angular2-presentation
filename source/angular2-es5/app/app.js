(function(app) {
    'use strict';

    var PHONES = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

    app.AppComponent = ng.core
        .Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
        .Class({
            constructor: function() {
                this.phones = PHONES;
            }
        });

    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });

})(window.app || (window.app = {}));


