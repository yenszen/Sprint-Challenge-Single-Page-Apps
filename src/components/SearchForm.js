import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  height: 2rem;
  width: 100%;
`;

const Form = styled.form`
  background: grey;
  margin: 0 auto;
  width: 30%;
`;

export default function SearchForm({ characters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, characters]);

  return (
    console.log("searchResults", searchResults),
    (
      <div>
        <section className="search-form">
          {/* Add a search form here */}
          <Form>
            <SearchInput
              id="name"
              type="text"
              name="textfield"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
            />
          </Form>
        </section>
        <List className="character-list">
          {searchResults.map(character => {
            return <CharacterCard character={character} key={character.id} />;
          })}
        </List>
      </div>
    )
  );
}
