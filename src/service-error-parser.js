angular.module('errorParserModule', [])
    .factory('serviceErrorParser', ['$filter', function ($filter) {
        var o = {};

        o.getErrorMessage = function (reason) {
            var errorCode = reason.code;
            var errorMessage = $filter('translate')(errorCode);
            if (errorMessage === errorCode || !errorMessage) {
                errorMessage = reason.message;
            }

            if (!errorMessage && typeof reason === 'string') {
                errorMessage = reason;
            }

            return errorMessage;
        };

        return o;
    }])
;