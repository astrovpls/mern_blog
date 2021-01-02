import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/'
import Home from './routes/home'
import Login from './routes/login'
import Article from './routes/article'
import NewArticle from './routes/NewArticle'

const App = () => {
  return (
    <div id="App">
      <Layout>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/article/:slug" component={Article} />
          <Route path="/edit/:slug" component={NewArticle} />
          <Route path="/new/article" component={NewArticle} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
