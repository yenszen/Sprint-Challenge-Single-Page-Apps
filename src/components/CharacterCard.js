import React, {useState, useEffect} from "react";

export default function CharacterCard(props) {
  return (
    <div>
      {/* <span>todo: character</span> */}
      <h2>{props.character.name}</h2>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <img src={props.character.image} alt="character img" />
    </div>
  );
}
