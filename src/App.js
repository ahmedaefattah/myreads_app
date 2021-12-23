import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'

class App extends React.Component {

  state = {
      books:[]
  }
  
  componentDidMount() {
      BooksAPI.getAll().then((books) => {this.setState({books})})
  }

    changeBookShelf = (book,shelf) => {
      BooksAPI.update(book, shelf).then( () => {
        BooksAPI.getAll().then( (books) => {this.setState({books})})
      } )
    }
  render() {
   
    return (
      <div className="app">
        <Route exact path='/'  render={ () => (<MainPage   books={this.state.books} changeBookShelf={this.changeBookShelf} />)} />
        <Route  path='/search' render={ () => (<SearchPage books={this.state.books} changeBookShelf={this.changeBookShelf} />)} />
      </div>
    )
  }
}

export default App
