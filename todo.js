function TodoCtroller($scope){
    $scope.TodosCount = 3;

    $scope.Todos = [{text:"Learn from leo", checked:false},
                    {text:"leo lam", checked:false},
                    {text:"leolao1965", checked:false},
                    {text:"leoleogmail", checked:false}];

    $scope.getTotalTodos = function() {
        return $scope.Todos.length;
    }

    $scope.deleteTodos = function() {
        $scope.Todos = _.filter($scope.Todos, 
        function(todo){
            return !todo.checked;
        }
        )
    }

    $scope.addTodo = function() {
        $scope.Todos.push({text:$scope.formTodoText,checked:false});
        $scope.formTodoText = "";
    }
}