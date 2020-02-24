import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      {/* <span>todo: character</span> */}
      <h3>{props.character.name}</h3>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <img src={props.character.image} alt="character img" />
    </Card>
  );
}
