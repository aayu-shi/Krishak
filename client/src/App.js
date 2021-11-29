import "./App.css";
import { useState, useEffect } from "react";
import { HomePage } from "./containers/HomePage/index";
import { Products } from "./components";
import { Switch, Route } from "react-router-dom";
import Weather from "./containers/Weather";
import { Navbar } from "./components/Navbar";
import Loader from "./containers/Weather/Loader";
import { useLocation } from "react-router-dom";
import ChatIcon from "./components/ChatIcon";
import SignIn from "./containers/Auth/signin";
import Signup from "./containers/Auth/signup";
import Helpline from "./containers/Helpline";

function App() {
  const [loading, setloading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [loading]);
  return loading === false ? (
    <div>
      {pathname === "/" ? <div /> : <Navbar />}
      <Switch>
        <Route path="/helpline">
          <Helpline />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/cropcart">
          <Products />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <ChatIcon />
    </div>
  ) : (
    <Loader />
  );
}

export default App;
