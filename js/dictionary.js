angular.module("dictionaryApp" , ['ui.bootstrap'])
    .controller("dictionaryCtrl",function($scope){
        $scope.wordList = ['Apple','Banana','Cat','Dog','Elephant'];
        $scope.phraseList = [];
        $scope.wordListObj = [{name:'Apple',definition:"Apple has more iron then Banana"},{name:'Banana',definition:"Banana has more iron then Apple"},{name:'Cat',definition:"Cat is not wild then a Dog"},{name:'Dog',definition:"Dog is more wild the a Cat"},{name:'Elephant',definition:"Elephant does not like Apple or Banana"},{name:'Apple',definition:"Apple has more iron then Banana"},{name:'Banana',definition:"Banana has more iron then Apple"},{name:'Cat',definition:"Cat is not wild then a Dog"},{name:'Dog',definition:"Dog is more wild the a Cat"},{name:'Elephant',definition:"Elephant does not like Apple or Banana"},{name:'Apple',definition:"Apple has more iron then Banana"},{name:'Banana',definition:"Banana has more iron then Apple"},{name:'Cat',definition:"Cat is not wild then a Dog"},{name:'Dog',definition:"Dog is more wild the a Cat"},{name:'Elephant',definition:"Elephant does not like Apple or Banana"}];
        $scope.wordListObj.forEach(function(value,index){
                $scope.phraseList.push($scope.wordListObj[index].definition);
        });
        $scope.searchBy = {};
        $scope.onSelect = function($model){
            $scope.$model = $model;
            $scope.searchDefinition($scope.$model);
        }
        $scope.onPhraseSelect = function($model){
            $scope.$model = $model;
            $scope.searchDefinitionByPhrase($scope.$model);
        }

        $scope.searchDefinitionByPhrase = function(name){
            $scope.phraseList.forEach(function(value,index){
                    if(name == $scope.phraseList[index].name){
                    $scope.selectedPhraseObj = $scope.phraseList[index];
                    $scope.PhraseDefinition = $scope.phraseList[index].definition;
                }
            });
            $scope.wordList.forEach(function(value,index){
                $scope.nameDefinition = $scope.nameDefinition.replace(new RegExp(value, 'g'),  "<a>"+value+"</a>");
            })
            console.log($scope.nameDefinition)

            $scope.containNames = [];
        }
        $scope.searchDefinition = function(name){
            $scope.wordListObj.forEach(function(value,index){
                if(name == $scope.wordListObj[index].name){
                    $scope.selectedNameObj = $scope.wordListObj[index];
                    $scope.nameDefinition = $scope.wordListObj[index].definition;
                }
            });
            $scope.wordList.forEach(function(value,index){
                $scope.nameDefinition = $scope.nameDefinition.replace(new RegExp(value, 'g'),  "<a>"+value+"</a>");
            })
            console.log($scope.nameDefinition)

            $scope.containNames = [];
        }
    })