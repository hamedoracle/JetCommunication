/* person module */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext'
], function (oj, ko) {
   
    function personContentViewModel() {
        var self = this;
        self.person_name = ko.observable("Hamed");

        self.changePersonName = function () {
            console.log("ii");
            self.person_name("Tobias");
        };
    }

    return new personContentViewModel();
});
