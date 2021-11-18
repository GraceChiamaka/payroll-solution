import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import Staff from "../pages/Staff";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/staff/:id" exact component={Staff} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
