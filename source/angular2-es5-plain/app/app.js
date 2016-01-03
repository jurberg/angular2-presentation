(function() {
    'use strict';

    var PHONES = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

    function AppComponent() {
        this.phones = PHONES;
    }

    AppComponent.annotations = [
        new ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        })
    ];

    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(AppComponent);
    });

})();


