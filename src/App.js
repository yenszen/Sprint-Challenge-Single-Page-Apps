import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {Route, Link} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;

export default function App() {
  return (
    <main>
      <Nav>
          <Link to="/">Home</Link>
          <Link to="/characters">Character List</Link>
      </Nav>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={() => {
        return <CharacterList />
      }} />
    </main>
  );
}
