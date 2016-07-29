angular.module('errorParserModule', ['pascalprecht.translate'])
    .factory('serviceErrorParser', ['$filter', function ($filter) {
        var o = {};

        o.getErrorMessage = function (reason, defaultValue) {
            console.error(reason);

            var errorMessage = reason.message;

            if (!errorMessage) {
                errorMessage = defaultValue;
            }

            errorMessage = $filter('translate')(errorMessage);

            return errorMessage;
        };

        return o;
    }])
;