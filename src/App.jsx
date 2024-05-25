import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import News from "./components/news/News"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id'  component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/news' component={News} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
