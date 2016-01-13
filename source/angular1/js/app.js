(function(angular) {

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

    function PhoneListCtrl($scope, PhoneService) {
        $scope.phones = PhoneService.phones;
    }

    angular.module('phonecatApp', [])
        .service('PhoneService', PhoneService)
        .controller('PhoneListCtrl', ['$scope', 'PhoneService', PhoneListCtrl]);

})(angular);
