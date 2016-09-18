(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.items = '';
    $scope.message = '';

    $scope.showMessage = function () {
      if ($scope.items) {
        var itemsStrings = $scope.items.split(",");
        var counter = 0;
        for (var index=0; index<itemsStrings.length; index++){
          if (!(itemsStrings[index].length == 0
               ||
              !(itemsStrings[index].trim())))
              {
            counter++;
          }
        }

        if(counter > 3 ){
          $scope.message = "Too much!";
        }
        else {
          $scope.message = "Enjoy!";
        }
        $scope.color = "color:#00ff00";
        $scope.borderColor = "border-color:#00ff00";
      }

      else {
        $scope.message = "Please enter data first!";
        $scope.color = "color:#ff0000";
        $scope.borderColor = "border-color:#ff0000";
      }
    };

  };

})();
