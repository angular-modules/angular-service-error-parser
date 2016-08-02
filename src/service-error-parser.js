angular.module('errorParserModule', ['pascalprecht.translate'])
    .factory('serviceErrorParser', ['$filter', function ($filter) {
        var o = {};

        o.getErrorMessage = function (reason, defaultValue) {
            console.error(reason);

            var errorMessage = reason.message;

            if (!errorMessage) {
                errorMessage = defaultValue || reason;
            }

            if (typeof errorMessage === 'string') {
                errorMessage = $filter('translate')(errorMessage);
            } else {
                errorMessage = $filter('translate')(JSON.stringify(errorMessage));
            }

            return errorMessage;
        };

        return o;
    }])
;