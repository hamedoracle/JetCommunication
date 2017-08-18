/* department module */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext'], function (oj, ko) {
    function departmenContentViewModel() {
        var self = this;
        
        self.department_name = ko.observable("HR");
        self.changeDepartmentName = function () {
            self.department_name("Financial");
        };
    }

    return new departmenContentViewModel();
});
