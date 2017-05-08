/**
 * Created by duocai on 2016/9/6.
 */
angular.module('ctrl.notes', [])

  .controller('NotesCtrl', function($scope, Notes) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.notes = Notes.promote();
    $scope.remove = function(note) {
      Notes.remove(note);
    };

    $scope.choosePromote = "positive";
    $scope.chooseAll = "clear";

    $scope.getPromote = function() {
      $scope.notes = Notes.all();
    };

    $scope.getAll = function() {
      $scope.notes = Notes.promote();
    };

    $scope.newNote = function() {
      alert('new note');
    };
  })

  .controller('NoteDetailCtrl', function($scope, $stateParams, Notes) {
    $scope.chat = Notes.get($stateParams.noteId);
  });
