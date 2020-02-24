import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

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
          <form>
            <input
              id="name"
              type="text"
              name="textfield"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
            />
          </form>
        </section>
        <section className="character-list">
          {searchResults.map(character => {
            return <CharacterCard character={character} key={character.id} />;
          })}
        </section>
      </div>
    )
  );
}
