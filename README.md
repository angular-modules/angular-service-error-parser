## Install
 - Via npm
```
npm install angular-service-error-parser --save
```

 - Via bower
```
bower install angular-service-error-parser --save
```

## Usage
jade part:
```
script(src="#{cdn.normal}/libs/angular/angular.min.js?#{cdn.version}")
script(src="#{cdn.normal}/libs/angular-translate/angular-translate.min.js?#{cdn.version}")
script(type="text/javascript", src="#{cdn.normal}/libs/angular-service-error-parser/dist/all.min.js?#{cdn.version}")
```
js part:
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