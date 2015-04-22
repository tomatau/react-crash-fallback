var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        'demonstrate state',
        'build with forms and refs',
        'manage lifecycles hooks',
        'reverse the data',
        'think react'
      ]
    };
  },
  render: function(){
    return (
      <div className="todo-app">
        <form>
          <fieldset>
            <label htmlFor="newTodo">New Todo: </label>
            <input name="newTodo" ref='newTodo' />
          </fieldset>
        </form>
        <ul>
          {this.state.todos.map(function(todo, idx){
            return <li key={idx}>{todo}</li>
          })}
        </ul>
      </div>
    )
  }
})

React.render(
  <TodoApp/>,
  document.getElementById('container')
);