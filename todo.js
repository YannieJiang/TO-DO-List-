/**
 * Created by Yannie
 */

var myList = angular.module("myList",[])
                    .controller('mainCtrl',function($scope){

        $scope. itemList=[
                {'title':'HELLO BOO BOO! You note it down and you have to do it!',
            'done': false}
        ];
        $scope.add = function(){
            $scope.itemList.push({'title':$scope.items,'done':false});
            $scope.items= "";
        };
        //clear completed
        $scope.clearCompleted = function(){
            $scope.itemList = $scope.itemList.filter(function(val){
                            return !val.done  //return item.done that is not check, false
            })
        }
        //click to edit item
        $scope.toEdit = function(){
            if (event.target.contentEditable =="false"){
                event.target.contentEditable = "true"
                 }
        }

    });

