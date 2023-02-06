import {Component} from 'react'

import initialTodosList from './components/SimpleTodos'

import SimpleTodos from './components/TodoItem'

import './App.css'

// const App = () => <SimpleTodos />

class App extends Component {
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filteredData = todosList.filter(eachItem => eachItem.id !== id)
    this.setState({todosList: filteredData})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-head">Simple Todos</h1>
          {todosList.map(eachItem => (
            <SimpleTodos
              onDeleteTodo={this.onDeleteTodo}
              todoDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
