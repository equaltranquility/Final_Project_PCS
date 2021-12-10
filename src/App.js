import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <body>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </body>
  );
}

export default App;
