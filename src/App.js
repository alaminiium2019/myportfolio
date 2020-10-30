
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import Contact from './Components/Home/Contact/Contact';
import Home from './Components/Home/Home/Home';
import MenuBar from './Components/Home/MenuBar/MenuBar';
import AboutMe from './Components/Home/AboutMe/AboutMe';
import Blog from './Components/Home/Blog/Blog';
import Projects from './Components/Home/Projects/Projects';
import Header from './Components/Home/Header/Header';



function App() {
  return (   
    <Router>
       <Header></Header>      
          <Switch>
            <Route path="/projects">
              <Projects></Projects>
              </Route>
              <Route path="/contact">
              <Contact></Contact>
              </Route>
              <Route path="/blog">
              <Blog></Blog>
              </Route>

            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
    </Router>

  );
}

export default App;
