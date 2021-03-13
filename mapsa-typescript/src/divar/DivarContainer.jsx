import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Divar from "./Divar";

const DivarContainer = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/tehran" />
        </Route>
        <Route to="/tehran" component={Divar} />
      </Switch>
    </BrowserRouter>
  );
};

export default DivarContainer;
