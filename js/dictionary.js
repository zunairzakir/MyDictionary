angular.module("dictionaryApp" , [])
    .controller("dictionaryCtrl",function($scope){
        $scope.orgNames = ['Apple','Banana','Cat','Dog','Elephant'];
        $scope.orgNamesObj = [{name:'Apple',definition:"Apple has more iron then Banana"},{name:'Banana',definition:"Banana has more iron then Apple"},{name:'Cat',definition:"Cat is not wild then a Dog"},{name:'Dog',definition:"Dog is more wild the a Cat"},{name:'Elephant',definition:"Elephant does not like Apple or Banana"}];

        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        matches.push({ value: str });
                    }
                });
                cb(matches);
            };
        };
        $('#orgNameDiv .typeahead').typeahead({
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'orgNames',
                displayKey: 'value',
                source: substringMatcher($scope.orgNames)
            }).on("typeahead:selected ", function(){
                $scope.organizationName = this.value;
                $scope.orgNamesObj.forEach(function(value,index){
                    if($scope.organizationName == $scope.orgNamesObj[index].name){
                        $scope.selectedNameObj = $scope.orgNamesObj[index];
                        $scope.nameDefinition = $scope.orgNamesObj[index].definition;
                    }
                });
                $scope.orgNames.forEach(function(value,index){
                    $scope.nameDefinition = $scope.nameDefinition.replace(new RegExp(value, 'g'),  "<a>"+value+"</a>");
                })
                console.log($scope.nameDefinition)

                $scope.containNames = [];
            });
    })