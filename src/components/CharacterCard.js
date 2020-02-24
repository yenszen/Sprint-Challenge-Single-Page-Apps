import React, {useState, useEffect} from "react";
import axios from "axios";

export default function CharacterCard(props) {
  // const [character, setCharacter] = useState();
  // const paramItemId = props.match.params.id;

  // useEffect(() => {
  //   const id = paramItemId;
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(response => {
  //       setCharacter(response.data.results);
  //     })
  //     .catch(error => error);

  // }, [paramItemId]);

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
