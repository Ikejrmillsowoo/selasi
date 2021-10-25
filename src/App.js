import "./App.css";
import FooterComponent from "./footerComponent";
import Header from "./headerComponent";
import MainComponent from "./mainComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/creative">{/* <Creative /> */}</Route>
          <Route path="/contact">{/* <Contact /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
