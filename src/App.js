import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Form from "./Form";
import ac from "./ac";
//import FormResults from "./FormResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    };
    this.counter = this.counter.bind(this);
  }
  counter() { 
    var x = this.state.number;
    this.setState({number : x + 1})
  };
  render() {
    return (
      <Router>
        <h1> {this.state.number} 
        </h1>
        <NavBar props = {this.counter}/>
        <Switch>
          <Route exact path='/' component={HomeText} />
          <Route path='/form' component={Form} />
          <Route path='/ac' component={ac} />
          {/* <Route
            path='/results'
            render={props => <FormResults items={props} {...props} />}
          ></Route> */}
        </Switch>
      </Router>
    );
  }
}

function HomeText() {
  return <h1>Home Page 
    <br></br>
    <br></br>

    THIS IS A SURVEY PAGE 
    <br></br>
    PLEASE CLICK ON ICONS IN NAVIGATION BAR
  </h1>;
}

export default App;
