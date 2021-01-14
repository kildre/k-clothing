import React from "react";
import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <h1 className="title">{"Killer Clothing".toUpperCase()}</h1>
    <Directory />
  </div>
);

export default HomePage;
