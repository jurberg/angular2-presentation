System.register(['angular2/core', 'angular2/testing', './PhoneService', './AppComponent'], function(exports_1) {
    var core_1, testing_1, PhoneService_1, AppComponent_1;
    var MockPhoneService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (PhoneService_1_1) {
                PhoneService_1 = PhoneService_1_1;
            },
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            }],
        execute: function() {
            MockPhoneService = (function () {
                function MockPhoneService() {
                    this.phones = [];
                }
                return MockPhoneService;
            })();
            testing_1.describe('DisplayName', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(PhoneService_1.PhoneService, { useClass: MockPhoneService }),
                    AppComponent_1.AppComponent
                ]; });
                testing_1.it('should have zero phones', testing_1.inject([AppComponent_1.AppComponent], function (appComponent) {
                    testing_1.expect(appComponent.phones.length).toBe(0);
                }));
            });
        }
    }
});
//# sourceMappingURL=app.spec.js.map