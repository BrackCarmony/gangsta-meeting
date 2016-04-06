angular.module("quickAngular").controller("mainCtrl", function($scope, mainSrvc) {
      $scope.friends = mainSrvc.getFriends();

      $scope.removeFriend = function(name){
        mainSrvc.removeFriend(name);
      }

      $scope.addFriend = function(newFriend){
        mainSrvc.addFriend(newFriend)
      }

      $scope.removeRandomFriend = function(){
        mainSrvc.removeRandomFriend();
      }

});
