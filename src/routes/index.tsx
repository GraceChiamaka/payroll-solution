import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/Home";
import Staff from "../pages/Staff";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/staff/:id" exact component={Staff} />
        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
