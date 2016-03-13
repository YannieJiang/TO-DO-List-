/**
 * Created by yuki on 3/11/16.
 */

var myList = angular.module("myList",[])
                    .controller('mainCtrl',function($scope){

        $scope. itemList=[
            {'title':'BOO BOO You Put it Down You have to do it!',
            'done': false}
        ];

        $scope.add = function(){
        $scope.itemList.push({'title':$scope.items,'done':false});
            $scope.items= "";
        };

        $scope.clearCompleted = function(){
            $scope.itemList = $scope.itemList.filter(
            function(val){
        return !val.done  //return item.done that is not check, false
    })

        };

        //click to edit item


        $scope.toEdit = function(){
            if (event.target.contentEditable =="false"){
                event.target.contentEditable = "true"
                 }
                 console.log(event.target.contentEditable)
                 $scope.hideUdo =true;

                }

                //unto item
                $scope.undo =function(){
                  $scope.itemList = $scope.itemList.filter(function(item){
                    return !item.done + item.done
                    console.log(item.done)
                  })
                }
    });

//     //second To-do List
// .controller('listCtrl',function($scope){
//
//         // declare list item :title, status
//         $scope.listItem =[
//             {'title': 'Enter Your Items',
//             'done':false
//             }
//         ];
//         //add input item to the list
//         $scope.add = function(){
//             $scope.listItem.push({'title':$scope.todoList, 'done':false});
//             $scope.todoList ="";
//         };
//
//
// // filter out the listitem array, apply filter () to set a call back that returns item.don that's uncheck -has false value
//         $scope.clearList=function() {
//             $scope.listItem = $scope.listItem.filter(function (list) {
//                 return !list.done
//             })
//         };
//
//             $scope.clickToEdit = function(){
//
//                 if(event.target.contentEditable =="false"){
//                     event.target.contentEditable = "true"
//                 }
//                     console.log(event.target.contentEditable)
//             }
//
//
//
//
// });
