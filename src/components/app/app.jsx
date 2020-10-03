import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen placesCount={placesCount} />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <RoomScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
