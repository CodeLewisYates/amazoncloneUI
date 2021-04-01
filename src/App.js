import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" exact component={Checkout} />
    </Router>
  );
}

export default App;
