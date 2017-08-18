define(['ojs/ojcore'
            , 'knockout'
            , 'jquery'
            , 'viewModels/person'
            , 'viewModels/department'
            , 'ojs/ojmodule'],
        function (oj, ko, $, person, department) {

            function DashboardViewModel() {
                var self = this;

                self.callPersonMethod = function () {
                    person.changePersonName();
                };
                self.callDepartmentMethod = function () {
                    department.changeDepartmentName();
                };
            }
            return new DashboardViewModel();
        }
);
