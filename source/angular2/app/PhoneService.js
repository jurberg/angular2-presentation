System.register([], function(exports_1) {
    var PhoneService;
    return {
        setters:[],
        execute: function() {
            PhoneService = (function () {
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
            exports_1("PhoneService", PhoneService);
        }
    }
});
//# sourceMappingURL=PhoneService.js.map