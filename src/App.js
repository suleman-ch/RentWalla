import {  Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginSignup/Login";
import Carswali from "./components/Main/Carswali";
import Home from "./components/Main/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cars" component={Carswali}/>
      </Switch>
    </>
  );
}

export default App;
