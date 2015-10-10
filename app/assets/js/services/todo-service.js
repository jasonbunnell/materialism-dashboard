app.factory('todoService', ['localStorageService', '$rootScope', '$filter', function (localStorageService, $rootScope, $filter) {
  function Todo ($scope) {
    this.$scope = $scope;
    this.todoFilter = {};
    this.activeFilter = 0;

    this.input = angular.element('#todo-title');

    this.filters = [
      {
        'title': 'All',
        'method': 'all'
      },
      {
        'title': 'Active',
        'method': 'active'
      },
      {
        'title': 'Completed',
        'method': 'completed'
      }
    ];

    this.newTodo = {
      title: '',
      done: false,
      editing: false
    };

    this.restore();

    if ( !localStorageService.get('todos') ) {
      todos = [];
      todos[0] = { title: 'Grow my mailing list', done: true };
      todos[1] = { title: 'Create a killer SAAS business', done: false };
      todos[2] = { title: 'Write autoresponder sequence', done: false };

      localStorageService.set('todos', todos);
    }
    localStorageService.bind(this.$scope, 'todos');

    this.completedTodos = function() {
      return $filter('filter')(this.$scope.todos, { done: !true });
    };

    this.addTodo = function() {
      if (this.todo.title !== '' && this.todo.title !== undefined) {
        this.$scope.todos.push(this.todo);
        $rootScope.$broadcast('todos:count', this.count());
        this.restore();
      }
    };

    this.updateTodo = function() {
      this.restore();
    };
  }

  Todo.prototype.saveTodo = function(todo) {
    if ( this.todo.editing ) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  };

  Todo.prototype.editTodo = function(todo) {
    this.todo = todo;
    this.todo.editing = true;
    this.input.focus();
  };

  Todo.prototype.toggleDone = function(todo) {
    $rootScope.$broadcast('todos:count', this.count());
  };

  Todo.prototype.clearCompleted = function() {
    this.$scope.todos = this.completedTodos();
    this.restore();
  };

  Todo.prototype.count = function() {
    c = this.completedTodos();
    return c.length;
  };

  Todo.prototype.restore = function(focus) {
    focus = typeof focus !== 'undefined' ? focus : true;

    this.todo = angular.copy(this.newTodo);
    this.input.val('');

    if ( focus === true )
      this.input.focus();
  };

  Todo.prototype.filter = function(filter) {
    if ( filter === 'active' ) {
      this.activeFilter = 1;
      this.todoFilter = { done: false };
    } else if ( filter === 'completed' ) {
      this.activeFilter = 2;
      this.todoFilter = { done: true };
    } else {
      this.activeFilter = 0;
      this.todoFilter = {};
    }
  };

  return Todo;
}]);
