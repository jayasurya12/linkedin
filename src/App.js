import React from 'react'
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './Pages/Home'
import userReducer from './store/Reducer/Reducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './App.css'
const App = () => {
  const store=createStore(userReducer)
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route  path='/' exact component={Home}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
