import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        { /* <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /> */}
      </header>
      <Route exact path="/" component={CharacterList} />
      <Route path="/characters/:id" render={(renderProps) => {
        return <CharacterCard {...renderProps} />
      }} />
    </section>
  );
}
