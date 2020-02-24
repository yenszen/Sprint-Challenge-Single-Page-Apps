import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {Route, Link} from "react-router-dom";


export default function App() {
  return (
    <main>
      <nav>
          <Link exact to="/">Home</Link>
          <Link to="/characters">Character List</Link>
      </nav>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={() => {
        return <CharacterList />
      }} />
    </main>
  );
}
