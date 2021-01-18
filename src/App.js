import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
