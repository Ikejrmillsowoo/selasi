import "./App.css";
import FooterComponent from "./footerComponent";
import Header from "./headerComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactComponent from "./contactComponent";
import CommercialComponent from "./commercialComponent";
import CreativeComponent from "./creativeComponent";
import AboutComponent from "./aboutComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/creative">
            <CreativeComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/">
            <CommercialComponent />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
