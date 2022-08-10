import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Users from "../pages/Users/Users";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" element={<Users />} />
        <Route path="*" element={<NotFoundPage />} />
      </Switch>
    </Router>
  );
};

export default Routes;
