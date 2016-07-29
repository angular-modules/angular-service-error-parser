## Install
```
bower install angular-service-error-parser --save
```

## Usage
```
angular.module('yourModule', ['errorParserModule', 'servicesModule'])
    .controller('yourCtrl', ['$scope', 'serviceErrorParser', function($scope, serviceErrorParser, service){
        service.post('http://your/service', {})
            .catch(function(reason){
                $scope.errorMessage = serviceErrorParser.getErrorMessage(reason);
            }
        ;
    })
;
```